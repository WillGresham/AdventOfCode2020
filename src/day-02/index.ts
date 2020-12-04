import getInput from '../get-input'

const data = getInput().split('\n').filter(item => item).map(item => {
  const [rules, password] = item.split(':')
  const [restriction, character] = rules.split(' ')
  const [min, max] = restriction.split('-')
  return {
    password: password.trim(), character, min, max
  }
})

const partOne = () => {
  console.log(data.filter(item => {
    const matches = (item.password.match(new RegExp(item.character, 'g')) || []).length
    return matches >= +item.min && matches <= +item.max
  }).length)
}

partOne()
