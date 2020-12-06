import { partOne, partTwo } from './index'

const inputData = 'abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb'

it('partOne should return 11 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(11)
})

it('partOne should return 6 with provided sample data', () => {
  expect(partTwo(inputData)).toEqual(6)
})
