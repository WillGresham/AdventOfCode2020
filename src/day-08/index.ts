import getInput from '../get-input'

const parseInput = (input: string) => input.trim().split('\n')

const executeInstructions = (
  instructions: string[],
): { failed: boolean; acc: number } => {
  const executedInstructions: number[] = []
  let acc = 0
  let nextInstruction = 0

  while (nextInstruction < instructions.length) {
    if (executedInstructions.indexOf(nextInstruction) !== -1) {
      return { failed: true, acc }
    }
    executedInstructions.push(nextInstruction)

    const [command, argument] = instructions[nextInstruction].split(' ')

    switch (command) {
      case 'jmp':
        nextInstruction += +argument
        break
      case 'acc':
        acc += +argument
      // eslint-disable-next-line no-fallthrough
      default:
        nextInstruction++
    }
  }

  return {
    failed: false,
    acc,
  }
}

export const partOne = (input: string): number =>
  executeInstructions(parseInput(input)).acc

export const partTwo = (input: string): number => {
  const instructions = parseInput(input)
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].indexOf('acc') > -1) {
      continue
    }

    const { failed, acc } = executeInstructions([
      ...instructions.slice(0, i),
      instructions[i].indexOf('jmp') > -1
        ? instructions[i].replace('jmp', 'nop')
        : instructions[i].replace('nop', 'jmp'),
      ...instructions.slice(i + 1),
    ])

    if (!failed) {
      return acc
    }
  }
}

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
