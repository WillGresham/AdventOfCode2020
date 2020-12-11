import { partOne, partTwo } from './index'

const inputData =
  '28\n33\n18\n42\n31\n14\n46\n20\n48\n47\n24\n23\n49\n45\n19\n38\n39\n11\n1\n32\n25\n35\n8\n17\n7\n9\n4\n2\n34\n10\n3'

it('partOne should return 220 with provided sample data', () => {
  expect(partOne(inputData)).toEqual(220)
})

xit('partTwo should return 62 with provided sample data', () => {
  expect(partTwo(inputData, 5)).toEqual(62)
})
