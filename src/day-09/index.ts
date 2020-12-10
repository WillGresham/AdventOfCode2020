import getInput from '../get-input'

const parseInput = (input: string): number[] =>
  input
    .trim()
    .split('\n')
    .map((value) => +value)

export const partOne = (input: string, preambleCount: number): number => {
  const inputValues = parseInput(input)
  const invalid = false
  let i = 0

  while (invalid === false) {
    const preamble = inputValues.slice(i, i + preambleCount)
    const [value] = inputValues.slice(i + preambleCount)
    if (
      !preamble.some((num) =>
        preamble.find((partner) => partner !== num && partner === value - num),
      )
    ) {
      return value
    }
    i++
  }

  throw 'Err nerr'
}

export const partTwo = (input: string, preamble: number): number => {
  const numberToFind = partOne(input, preamble)
  const inputValues = parseInput(input)

  for (let i = 0; i < inputValues.length; i++) {
    for (let j = i + 1; j < inputValues.length; j++) {
      const attempt = inputValues.slice(i, j + 1)
      if (attempt.reduce((acc, cur) => acc + cur, 0) === numberToFind) {
        return Math.min(...attempt) + Math.max(...attempt)
      }
    }
  }

  throw 'You done goofed'
}

console.log(`Part 1: ${partOne(getInput(), 25)}`)
console.log(`Part 2: ${partTwo(getInput(), 25)}`)
