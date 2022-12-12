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

function findCommonElement(arr1: string[], arr2: string[], arr3?: string[]) {
  return arr3
    ? arr1.find((el1) =>
        arr2.find((el2) => {
          if (el2 !== el1) {
            return false
          }
          return arr3.find((el3) => el3 === el2)
        })
      )
    : arr1.find((el1) => arr2.find((el2) => el2 === el1))
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

function getBadgePriorityTotal() {
  let total = 0
  let startIndex = 0

  for (let i = 0; i < bags.length / 3; i++) {
    const commonItem = findCommonElement(
      bags[startIndex].split(''),
      bags[startIndex + 1].split(''),
      bags[startIndex + 2].split('')
    )
    startIndex += 3
    if (!commonItem) {
      return
    }
    total += priorityMap[commonItem]
  }

  return total
}

console.log(getBadgePriorityTotal())
