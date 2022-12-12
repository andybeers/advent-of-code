import { strings } from '../../utils'

const rawData = strings('2022/04/data.txt')

type Sections = [sectionStart: number, sectionEnd: number]
type Assignment = [Sections, Sections]

function transformDataIntoThreeDimentionalIntegerArray(
  data: string[]
): Assignment[] {
  return data.map((row) =>
    row
      .split(',')
      .map((assignment) =>
        assignment.split('-').map((section) => parseInt(section))
      )
  ) as Assignment[]
}

function areShiftsOverlapping(
  elf1Sections: Sections,
  elf2Sections: Sections
): boolean {
  if (elf1Sections[0] === elf2Sections[0]) {
    return true
  }
  if (elf1Sections[0] > elf2Sections[0]) {
    return elf2Sections[1] >= elf1Sections[1]
  }
  return elf1Sections[1] >= elf2Sections[1]
}

function getOverlappingShiftCount(): number {
  let shiftCount = 0

  const assignments = transformDataIntoThreeDimentionalIntegerArray(rawData)
  assignments.forEach((assignment) => {
    const isOverlapping = areShiftsOverlapping(assignment[0], assignment[1])
    if (isOverlapping) {
      shiftCount++
    }
  })

  return shiftCount
}

console.log(getOverlappingShiftCount())
