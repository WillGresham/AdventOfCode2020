import { partOne, partTwo } from './index'

const inputData = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc'

it('partOne should return 2 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(2)
})

it('partTwo should return 1 with provided sample data', () => {
  expect(partTwo(inputData)).toEqual(1)
})
