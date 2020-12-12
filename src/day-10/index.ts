import getInput from '../get-input'

const parseInput = (input: string): number[] =>
  input
    .trim()
    .split('\n')
    .map((value) => +value)
    .concat(0)
    .sort((a, b) => a - b)

export const partOne = (input: string): number => {
  const jolts = parseInput(input).map((item, index, arr) =>
    arr[index + 1] ? arr[index + 1] - item : 3,
  )

  return (
    jolts.filter((jolt) => jolt === 3).length *
    jolts.filter((jolt) => jolt === 1).length
  )
}

export const partTwo = (input: string): number => {
  const jolts = parseInput(input)
  const combinations: Map<number, number> = new Map<number, number>([[0, 1]])

  jolts.forEach((item, itemIndex) =>
    jolts
      .slice(itemIndex + 1, itemIndex + 4)
      .forEach(
        (other) =>
          [-1, -2, -3].indexOf(item - other) > -1 &&
          combinations.set(
            jolts.indexOf(other),
            (combinations.get(itemIndex) || 0) +
              (combinations.get(jolts.indexOf(other)) || 0),
          ),
      ),
  )

  return combinations.get(jolts.length - 1)
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
