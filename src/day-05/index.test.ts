import { partOne } from './index'

it('partOne should return 820 with provided sample data', () => {
  expect(partOne('BFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL')).toEqual(820)
})
