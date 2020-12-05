import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'

export default (): string => {
  return readFileSync(
    resolve(dirname(require.main.filename), 'input.txt'),
    'utf8',
  ).trim()
}
