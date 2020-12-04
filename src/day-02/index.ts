import getInput from '../get-input'

const data = getInput().split('\n').filter(item => item).map(item => {
  const [restrictions, character, password] = item.split(' ')
  const [restrictionA, restrictionB] = restrictions.split('-')
  return {
    password, character: character.replace(':', ''), restrictionA, restrictionB
  }
})

const partOne = () => {
  console.log(
    'Part 1:',
    data.filter(item => {
      const matches = (item.password.match(new RegExp(item.character, 'g')) || []).length
      return matches >= +item.restrictionA && matches <= +item.restrictionB
    }).length
  )
}
const partTwo = () => {
  console.log(
    'Part 2:',
    data.filter(item =>
      [
        item.password[+item.restrictionA - 1] === item.character,
        item.password[+item.restrictionB - 1] === item.character
      ].filter(result => result).length === 1
    ).length
  )
}

partOne()
partTwo()
