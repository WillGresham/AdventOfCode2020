import getInput from '../get-input'

const data = getInput().split('\n').filter(item => item).map(item => {
  const [restrictions, character, password] = item.split(' ')
  const [restrictionA, restrictionB] = restrictions.split('-')
  return {
    password, character: character.replace(':', ''), restrictionA, restrictionB
  }
})

const partOne = () => {
  console.log(data.filter(item => {
    const matches = (item.password.match(new RegExp(item.character, 'g')) || []).length
    return matches >= +item.restrictionA && matches <= +item.restrictionB
  }).length)
}

partOne()
