import getInput from '../get-input'

type Bag = {
  colour: string
  parents: Bag[]
  children: { bag: Bag; amount: number }[]
}
type BagsMap = Map<string, Bag>
type BagsSet = Set<string>

const parseInput = (input: string) => {
  const bags: BagsMap = new Map()
  input
    .trim()
    .split('\n')
    .forEach((item) => {
      const { colour, contains } = item.match(
        /^(?<colour>([a-z]+ ){2})bags contain (?<contains>no other bags|(.+))\.$/,
      ).groups

      const bag = getOrSetBag(colour.trim(), bags)
      if (contains !== 'no other bags') {
        getChildBags(contains, bags, bag)
      }
    })
  return bags
}

const getChildBags = (rule: string, bags: BagsMap, container: Bag) =>
  rule.split(',').forEach((item) => {
    const { amount, colour } = item
      .trim()
      .match(/^(?<amount>\d+) (?<colour>([a-z]+ ){2})/).groups
    const bag = getOrSetBag(colour.trim(), bags)
    bag.parents.push(container)
    container.children.push({ bag, amount: parseInt(amount) })
  })

const getOrSetBag = (colour: string, bags: BagsMap) => {
  bags.has(colour) || bags.set(colour, { colour, parents: [], children: [] })
  return bags.get(colour)
}

const countBagsContaining = (bag: Bag, containers: BagsSet): void =>
  bag.parents.forEach(
    (parentBag) =>
      containers.has(parentBag.colour) ||
      (containers.add(parentBag.colour) &&
        countBagsContaining(parentBag, containers)),
  )

const countContainedBags = (parent: Bag, multiplier = 1): number =>
  parent.children
    .map(
      ({ bag, amount }) =>
        amount * multiplier + countContainedBags(bag, amount * multiplier),
    )
    .reduce((acc, cur) => cur + acc, 0)

export const partOne = (input: string): number => {
  const set: BagsSet = new Set()
  countBagsContaining(parseInput(input).get('shiny gold'), set)
  return set.size
}

export const partTwo = (input: string): number =>
  countContainedBags(parseInput(input).get('shiny gold'))

console.log(`Part 1: ${partOne(getInput())}`)
console.log(`Part 2: ${partTwo(getInput())}`)
