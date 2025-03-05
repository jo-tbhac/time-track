import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

type ColWidthDef = Array<
  { field: string; width: number } | { field: string; flex: number; minWidth?: number }
>

interface ColWidth {
  field: string
  width: number
}

export const useCalcColWidth = (
  tableContainerRef: RefObject<HTMLDivElement | null>,
  colDef: ColWidthDef
) => {
  const [colWidthList, setColWidthList] = useState<ColWidth[]>(() =>
    colDef.map(({ field }) => ({ field, width: 0 }))
  )

  useEffect(() => {
    const total = colDef.reduce(
      (acc, currentValue) => {
        if ('flex' in currentValue) {
          acc.flex += currentValue.flex
        }
        if ('width' in currentValue) {
          acc.width += currentValue.width
        }
        return acc
      },
      { flex: 0, width: 0 }
    )

    const calcColWidth = () => {
      if (tableContainerRef.current == null || total.flex <= 0) {
        return
      }
      const containerWidth = tableContainerRef.current.offsetWidth
      const space = containerWidth - total.width
      const spacePerFlex = space / total.flex

      setColWidthList((currentColWidthList) => {
        return currentColWidthList.map((currentColWidth) => {
          const targetColDef = colDef.find(({ field }) => field === currentColWidth.field)
          if (!targetColDef) {
            return { ...currentColWidth, width: 0 }
          }
          if ('width' in targetColDef) {
            return { ...currentColWidth, width: targetColDef.width }
          }
          const calculatedWidth = targetColDef.flex * spacePerFlex
          if (targetColDef.minWidth == null) {
            return { ...currentColWidth, width: Math.max(0, calculatedWidth) }
          }
          if (calculatedWidth < targetColDef.minWidth) {
            return { ...currentColWidth, width: targetColDef.minWidth }
          }
          return { ...currentColWidth, width: calculatedWidth }
        })
      })
    }

    calcColWidth()

    window.addEventListener('resize', calcColWidth)

    return () => {
      window.removeEventListener('resize', calcColWidth)
    }
  }, [tableContainerRef, colDef])

  return colWidthList
}
