import fs from 'fs'

export function stdin() {
  return fs.readFileSync('2022/01/data.txt', 'utf-8')
}

export function strings(): string[] {
  return stdin().split('\n')
}

export function numbers() {
  return strings().map((s) => parseInt(s))
}
