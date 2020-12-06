import getInput from '../get-input'

const parseInput = (input: string) => input.split('\n\n')

export const partOne = (input: string): number =>
  parseInput(input).reduce(
    (acc, cur): number =>
      acc + Array.from(new Set(cur.replace(/\n/g, '').split(''))).length,
    0,
  )

export const partTwo = (input: string): number =>
  parseInput(input).reduce((acc, cur): number => {
    const answers = cur.split('\n')
    return (
      acc +
      Array.from(new Set(cur.replace(/\n/g, '').split(''))).filter((key) =>
        answers.every((answer) => answer.indexOf(key) > -1),
      ).length
    )
  }, 0)

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
