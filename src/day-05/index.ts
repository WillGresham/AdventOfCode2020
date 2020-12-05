import getInput from '../get-input'

const parseInput = (input: string) => {
  const map = {
    F: '0',
    B: '1',
    L: '0',
    R: '1',
  }

  return input
    .split('\n')
    .map((item) => item.replace(/F|B|L|R/g, (match) => map[match]))
}

const getSeatIds = (input: string) =>
  parseInput(input).map(
    (ticket) =>
      8 * parseInt(ticket.substr(0, 7), 2) + parseInt(ticket.substr(7, 3), 2),
  )

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
