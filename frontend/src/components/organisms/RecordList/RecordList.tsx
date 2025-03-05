import type { FC } from 'react'
import { useRef } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@/components/atoms/Table'
import { RecordListItem } from '@/components/molecules/RecordListItem'
import { useCalcColWidth } from '@/hooks/useCalcColWidth'
import { useJobs } from '@/hooks/useJobs'
import { useRecords } from '@/hooks/useRecords'

import styles from './RecordList.css'

const colWidthDef = [
  { field: 'date', width: 80 },
  { field: 'name', flex: 1, minWidth: 100 },
  { field: 'startedAt', width: 80 },
  { field: 'endedAt', width: 80 },
  { field: 'workTime', width: 80 },
  { field: 'note', width: 50 }
]

export const RecordList: FC = () => {
  const { records } = useRecords()
  const { jobs } = useJobs()

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const colWidthList = useCalcColWidth(tableContainerRef, colWidthDef)

  return (
    <TableContainer ref={tableContainerRef} className={styles.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>日付</TableCell>
            <TableCell className={styles.tableCell}>名称</TableCell>
            <TableCell className={styles.tableCell}>開始</TableCell>
            <TableCell className={styles.tableCell}>終了</TableCell>
            <TableCell className={styles.tableCell}>勤務時間</TableCell>
            <TableCell className={styles.tableCell} />
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <RecordListItem
              key={record.id}
              record={record}
              jobs={jobs}
              colWidthList={colWidthList}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
