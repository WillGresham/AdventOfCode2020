import { partOne, partTwo } from './index'

const inputData = '1721\n979\n366\n299\n675\n1456'
it('partOne should return 514579 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(514579)
})

it('partTwo should return 241861950 with provided sample data', () => {
  expect(partTwo(inputData)).toEqual(241861950)
})
