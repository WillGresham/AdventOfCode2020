import { partOne, partTwo } from './index'

jest.mock('../get-input', () => ({
  __esModule: true,
  default: () => '..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#'
}))

it('partOne should return 7', () => {
  expect(partOne()).toEqual(7)
})

it('partTwo should return 336', () => {
  expect(partTwo()).toEqual(336)
})
