import { strings } from '../../utils'

type Matchup =
  | 'A X'
  | 'A Y'
  | 'A Z'
  | 'B X'
  | 'B Y'
  | 'B Z'
  | 'C X'
  | 'C Y'
  | 'C Z'

const matchups = strings('2022/02/data.txt') as Matchup[]

type PointsMap = Record<Matchup, number>

const matchupPointsMap: PointsMap = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
}

const outcomePointsMap: PointsMap = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
}

function getTotalPoints(matchups: Matchup[], pointsMap: PointsMap) {
  return matchups.reduce((acc, curr) => {
    acc += pointsMap[curr]
    return acc
  }, 0)
}

console.log('by matchup: ', getTotalPoints(matchups, matchupPointsMap))
console.log('by outcome: ', getTotalPoints(matchups, outcomePointsMap))
