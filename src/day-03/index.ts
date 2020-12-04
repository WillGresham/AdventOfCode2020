import getInput from '../get-input'

const mapData = getInput().split('\n')

const followPath = (moveX, moveY) => {
  let trees = 0
  let y = 0
  while (y < mapData.length / moveY) {
    trees += mapData[y * moveY][y * moveX % mapData[y * moveY].length] === '#' ? 1 : 0
    y++
  }
  return trees
}

export const partOne = () => followPath(3, 1)

export const partTwo = () => [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]].map(([moveX, moveY]) => followPath(moveX, moveY)).reduce((acc, val) => acc * val, 1)

console.log(`Part 1: ${partOne()}`)
console.log(`Part 2: ${partTwo()}`)
