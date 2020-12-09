import { partOne, partTwo } from './index'

const inputData =
  'nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6'

it('partOne should return 5 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(5)
})

it('partTwo should return 8 with provided sample data', () => {
  expect(partTwo(inputData)).toEqual(8)
})
