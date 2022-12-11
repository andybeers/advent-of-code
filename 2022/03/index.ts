import { strings } from '../../utils'

const bags = strings('2022/03/data.txt')

const priorityMap: Record<string, number> = {}

// oof.jpeg
for (let i = 1; i < 27; i++) {
  const lowercaseChar = String.fromCharCode(96 + i)
  const uppercaseChar = String.fromCharCode(64 + i)
  priorityMap[lowercaseChar] = i
  priorityMap[uppercaseChar] = 26 + i
}

function findCommonElement(arr1: string[], arr2: string[]) {
  return arr1.find((el1) => arr2.find((el2) => el2 === el1))
}

function gatherMisplacedElements(bags: string[]) {
  return bags.reduce((acc, bag) => {
    const half = bag.length / 2
    const compartment1 = bag.slice(0, half).split('')
    const compartment2 = bag.slice(half).split('')

    const commonElement = findCommonElement(compartment1, compartment2)
    if (commonElement) {
      acc.push(commonElement)
    }
    return acc
  }, [] as string[])
}

function getPriorityTotal() {
  return gatherMisplacedElements(bags).reduce((acc, curr) => {
    acc += priorityMap[curr]
    return acc
  }, 0)
}

console.log(getPriorityTotal())
