import getInput from '../get-input'

const parseInput = (input) => input.split('\n').map((number) => +number)

export const partOne = (input: string): number => {
  let result = 0
  const numbers = parseInput(input)
  numbers.some((number) => {
    const index = numbers.indexOf(2020 - number)
    if (index > -1) {
      result = number * numbers[index]
      return true
    }
    return false
  })
  return result
}

export const partTwo = (input: string): number => {
  let result = 0
  const numbers = parseInput(input)
  numbers.some((numberA) =>
    numbers.some((numberB) => {
      const index = numbers.indexOf(2020 - numberA - numberB)
      if (index > -1) {
        result = numberA * numberB * numbers[index]
        return true
      }
      return false
    }),
  )
  return result
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
