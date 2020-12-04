import getInput from '../get-input'

const numbers = getInput().split('\n').map((number) => +number).filter((number) => number > 0)

const partOne = () => {
  numbers.some((number) => {
    const index = numbers.indexOf(2020 - number)
    if (index > -1) {
      console.log(`Part 1: ${number * numbers[index]}`)
      return true
    }
    return false
  })
}

const partTwo = () => {
  numbers.some((numberA) => numbers.some((numberB) => {
    const index = numbers.indexOf(2020 - numberA - numberB)
    if (index > -1) {
      console.log(`Part 2: ${numberA * numberB * numbers[index]}`)
      return true
    }
    return false
  }))
}

partOne()
partTwo()
