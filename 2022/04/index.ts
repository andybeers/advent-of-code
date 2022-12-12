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

const assignments = transformDataIntoThreeDimentionalIntegerArray(rawData)

type OverlapType = 'entire' | 'partial'
type DoesShiftOverlapProps = {
  elf1Sections: Sections
  elf2Sections: Sections
  overlapType: OverlapType
}

function doesShiftOverlap({
  elf1Sections,
  elf2Sections,
  overlapType,
}: DoesShiftOverlapProps): boolean {
  const indexToCheck = overlapType === 'entire' ? 1 : 0

  if (elf1Sections[0] === elf2Sections[0]) {
    return true
  }
  if (elf1Sections[0] > elf2Sections[0]) {
    return elf2Sections[1] >= elf1Sections[indexToCheck]
  }
  return elf1Sections[1] >= elf2Sections[indexToCheck]
}

function getOverlappingShiftCount({
  overlapType,
}: {
  overlapType: OverlapType
}): number {
  let shiftCount = 0

  assignments.forEach((assignment) => {
    const isOverlapping = doesShiftOverlap({
      elf1Sections: assignment[0],
      elf2Sections: assignment[1],
      overlapType,
    })
    if (isOverlapping) {
      shiftCount++
    }
  })

  return shiftCount
}

console.log(getOverlappingShiftCount({ overlapType: 'entire' }))
console.log(getOverlappingShiftCount({ overlapType: 'partial' }))
