import getInput from '../get-input'

const parseInput = (input: string) => input.split('\n')

const bsp = (searchData: number[], value: string[]): number => {
  let arr = [...searchData]
  value.forEach((val, i) => {
    arr = arr.slice(
      ['B', 'R'].indexOf(val) > -1 ? arr.length / 2 : 0,
      ['B', 'R'].indexOf(val) > -1 ? arr.length : arr.length / 2,
    )
  })
  return arr[0]
}

const getSeatIds = (input: string) => {
  const rowArr = Array.from({ length: 128 }, (_, i) => i)
  const colArr = Array.from({ length: 8 }, (_, i) => i)

  return parseInput(input).map(
    (ticket) =>
      8 *
        bsp(
          rowArr,
          ticket.split('').filter((item) => ['F', 'B'].indexOf(item) > -1),
        ) +
      bsp(
        colArr,
        ticket.split('').filter((item) => ['L', 'R'].indexOf(item) > -1),
      ),
  )
}

export const partOne = (input: string): number => Math.max(...getSeatIds(input))

export const partTwo = (input: string): number => {
  const ticketList = getSeatIds(input)
  return Array.from({ length: ticketList.length }, (_, i) => i + 1).filter(
    (seatNumber) =>
      ticketList.indexOf(seatNumber) === -1 &&
      ticketList.indexOf(seatNumber + 1) > -1 &&
      ticketList.indexOf(seatNumber - 1) > -1,
  )[0]
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
