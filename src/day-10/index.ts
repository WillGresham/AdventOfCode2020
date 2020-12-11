import getInput from '../get-input'

const parseInput = (input: string): number[] =>
  input
    .trim()
    .split('\n')
    .map((value) => +value)

export const partOne = (input: string): number => {
  const jolts = parseInput(input)
    .concat(0)
    .sort((a, b) => a - b)
    .map((item, index, arr) => (arr[index + 1] ? arr[index + 1] - item : 3))

  return (
    jolts.filter((jolt) => jolt === 3).length *
    jolts.filter((jolt) => jolt === 1).length
  )
}

export const partTwo = (input: string): number => 0

console.log(`Part 1: ${partOne(getInput())}`)
// console.log(`Part 2: ${partTwo(getInput())}`)
