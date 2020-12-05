import getInput from '../get-input'

const parseInput = (input: string) => input.split('\n')

const rows = 128
const cols = 8

const bsp = (searchData: number[], value: string[]): number => {
  let arr = [...searchData]
  value.forEach((val, i) => {
    arr = arr.slice(
      val === '-' ? arr.length / 2 : 0,
      val === '-' ? arr.length : arr.length / 2,
    )
  })
  return arr[0]
}

const getSeatIds = (input: string) => {
  const rowArr = Array.from({ length: rows }, (_, i) => i)
  const colArr = Array.from({ length: cols }, (_, i) => i)

  return parseInput(input).map((ticket) => {
    const row = bsp(
      rowArr,
      ticket
        .split('')
        .filter((item) => ['F', 'B'].indexOf(item) > -1)
        .map((x) => (x === 'F' ? '+' : '-')),
    )
    const col = bsp(
      colArr,
      ticket
        .split('')
        .filter((item) => ['L', 'R'].indexOf(item) > -1)
        .map((x) => (x === 'L' ? '+' : '-')),
    )
    return row * 8 + col
  })
}

export const partOne = (input: string): number => Math.max(...getSeatIds(input))

export const partTwo = (input: string): number => {
  const ticketList = getSeatIds(input)
  return Array.from(
    { length: ticketList.length },
    (_, i) => i + 1,
  ).filter(
    (seatNumber) =>
      ticketList.indexOf(seatNumber) === -1 &&
      ticketList.indexOf(seatNumber + 1) > -1 &&
      ticketList.indexOf(seatNumber - 1) > -1,
  )[0]
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
