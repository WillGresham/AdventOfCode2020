import getInput from '../get-input'

const parseInput = (input) =>
  input.split('\n').map((item) => {
    const [restrictions, character, password] = item.split(' ')
    const [restrictionA, restrictionB] = restrictions.split('-')
    return {
      password,
      character: character.replace(':', ''),
      restrictionA,
      restrictionB,
    }
  })

export const partOne = (input: string): number =>
  parseInput(input).filter((item) => {
    const matches = (item.password.match(new RegExp(item.character, 'g')) || [])
      .length
    return matches >= +item.restrictionA && matches <= +item.restrictionB
  }).length

export const partTwo = (input: string): number =>
  parseInput(input).filter(
    (item) =>
      [
        item.password[+item.restrictionA - 1] === item.character,
        item.password[+item.restrictionB - 1] === item.character,
      ].filter((result) => result).length === 1,
  ).length

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 1: ${partTwo(getInput())}`)
