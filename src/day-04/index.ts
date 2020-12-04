import getInput from '../get-input'

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const parseInput = (input) =>
  input.split('\n\n').map((item) =>
    item
      .split(/\n|\s/)
      .map((field) => ({ [field.split(':')[0]]: field.split(':')[1] }))
      .reduce((acc, cur) => ({ ...cur, ...acc }), {}),
  )

export const partOne = (input: string): void =>
  parseInput(input).filter((passport) =>
    requiredFields.every((key) => typeof passport[key] !== 'undefined'),
  ).length

export const partTwo = (input: string): void =>
  parseInput(input).filter((passport) =>
    requiredFields.every((key) => {
      if (typeof passport[key] === 'undefined') {
        return false
      }
      switch (key) {
        case 'byr':
          if (
            isNaN(passport.byr) ||
            passport.byr < 1920 ||
            passport.byr > 2002
          ) {
            return false
          }
          break
        case 'iyr':
          if (
            isNaN(passport.iyr) ||
            passport.iyr < 2010 ||
            passport.iyr > 2020
          ) {
            return false
          }
          break
        case 'eyr':
          if (
            isNaN(passport.eyr) ||
            passport.eyr < 2020 ||
            passport.eyr > 2030
          ) {
            return false
          }
          break
        case 'hgt':
          if (
            (
              passport.hgt.match(
                /^(1([5-8][0-9]|9[0-3]))cm|(59|6[0-9]|7[0-6])in$/,
              ) || []
            ).length === 0
          ) {
            return false
          }
          break
        case 'hcl':
          if ((passport.hcl.match(/^#[0-9a-f]{6}$/) || []).length === 0) {
            return false
          }
          break
        case 'ecl':
          if (
            ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(
              passport.ecl,
            ) === -1
          ) {
            return false
          }
          break
        case 'pid':
          if ((passport.pid.match(/^[0-9]{9}$/) || []).length === 0) {
            return false
          }
          break
      }
      return true
    }),
  ).length

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
