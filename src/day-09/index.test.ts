import { partOne, partTwo } from './index'

const inputData =
  '35\n20\n15\n25\n47\n40\n62\n55\n65\n95\n102\n117\n150\n182\n127\n219\n299\n277\n309\n576'

it('partOne should return 127 with provided sample data', () => {
  expect(partOne(inputData, 5)).toEqual(127)
})

it('partTwo should return 62 with provided sample data', () => {
  expect(partTwo(inputData, 5)).toEqual(62)
})
