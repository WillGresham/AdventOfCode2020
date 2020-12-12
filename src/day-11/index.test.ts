import { partOne } from './index'

const inputData =
  '#.##.##.##\n#######.##\n#.#.#..#..\n####.##.##\n#.##.##.##\n#.#####.##\n..#.#.....\n##########\n#.######.#\n#.#####.##'

it('partOne should return 37 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(37)
})
