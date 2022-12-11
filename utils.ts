import fs from 'fs'
import path from 'path'

export function stdin(localPath: string) {
  return fs.readFileSync(path.resolve(__dirname, localPath), 'utf-8')
}

export function strings(localPath: string): string[] {
  return stdin(localPath).split('\n')
}

export function numbers(localPath: string) {
  return strings(localPath).map((s) => parseInt(s))
}
