import getInput from '../get-input'

const parseInput = (input) => input.split('\n')

const treesFaceplanted = (mapData, moveX, moveY) => {
  let trees = 0
  let y = 0
  while (y < mapData.length / moveY) {
    trees +=
      mapData[y * moveY][(y * moveX) % mapData[y * moveY].length] === '#'
        ? 1
        : 0
    y++
  }
  return trees
}

export const partOne = (input: string): number =>
  treesFaceplanted(parseInput(input), 3, 1)

export const partTwo = (input: string): number =>
  [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ]
    .map(([moveX, moveY]) => treesFaceplanted(parseInput(input), moveX, moveY))
    .reduce((acc, val) => acc * val, 1)

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
