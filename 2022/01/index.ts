import { access } from 'fs'
import { numbers } from '../../utils'

const calories = numbers()

function getHighestCalories() {
  let highestSeenTotal = 0
  let currentTotal = 0
  calories.forEach((entry) => {
    if (isNaN(entry)) {
      if (currentTotal > highestSeenTotal) {
        highestSeenTotal = currentTotal
      }
      currentTotal = 0
    } else {
      currentTotal += entry
    }
  })
}

function getTopThreeCaloriesSum() {
  const caloriesByElf: number[] = []
  let elfTotal = 0

  calories.forEach((entry) => {
    if (isNaN(entry)) {
      caloriesByElf.push(elfTotal)
      elfTotal = 0
    } else {
      elfTotal += entry
    }
  })

  return caloriesByElf
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => {
      acc += curr
      return acc
    }, 0)
}

const highestSeenTotal = getHighestCalories()
const topThreeCaloryTotals = getTopThreeCaloriesSum()

console.log({ highestSeenTotal })
console.log({ topThreeCaloryTotals })
