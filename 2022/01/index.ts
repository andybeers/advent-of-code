import { numbers } from '../../utils'

const calories = numbers('2022/01/data.txt')

function getCaloriesByElf(caloryEntries: Array<number | typeof NaN>) {
  const caloriesByElf: number[] = []
  let elfTotal = 0

  caloryEntries.forEach((entry) => {
    if (isNaN(entry)) {
      caloriesByElf.push(elfTotal)
      elfTotal = 0
    } else {
      elfTotal += entry
    }
  })

  return caloriesByElf
}

function getHighestCalories() {
  return getCaloriesByElf(calories).sort((a, b) => b - a)[0]
}

function getTopThreeCaloriesSum() {
  return getCaloriesByElf(calories)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => {
      acc += curr
      return acc
    }, 0)
}

const highestSeenTotal = getHighestCalories()
const topThreeCaloryTotal = getTopThreeCaloriesSum()

console.log({ highestSeenTotal })
console.log({ topThreeCaloryTotal })
