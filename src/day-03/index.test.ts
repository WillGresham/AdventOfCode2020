import { partOne, partTwo } from './index'

const inputData =
  '..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#'

it('partOne should return 7 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(7)
})

it('partTwo should return 336 with provided sample data', () => {
  expect(partTwo(inputData)).toEqual(336)
})
