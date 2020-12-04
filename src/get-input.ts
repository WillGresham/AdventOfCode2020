const fs = require('fs')
const path = require('path')

export default (): string => {
  return fs.readFileSync(path.resolve(path.dirname(require.main.filename), 'input.txt'), 'utf8')
}
