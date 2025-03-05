import type { FC } from 'react'
import { useMemo } from 'react'

import { IconButton } from '@/components/atoms/IconButton'
import { TableCell, TableRow } from '@/components/atoms/Table'
import { TextInput } from '@/components/atoms/TextInput'
import { TimeInput } from '@/components/atoms/TimeInput'
import type { useCalcColWidth } from '@/hooks/useCalcColWidth'
import { format } from '@/lib/date'
import { EllipsisIcon } from '@/lib/icons'
import type { Job } from '@/types/job'
import type { Record as RecordType } from '@/types/record'

import styles from './RecordListItem.css'

interface Props {
  record: RecordType
  jobs: Job[]
  colWidthList: ReturnType<typeof useCalcColWidth>
}

export const RecordListItem: FC<Props> = ({ record, jobs, colWidthList }) => {
  const dateString = useMemo(() => {
    return format(record.startedAt, 'M/d E')
  }, [record.startedAt])

  const jobName = useMemo(() => {
    const job = jobs.find(({ id }) => id === record.jobId)
    return job?.name
  }, [jobs, record.jobId])

  const colWidthMap = useMemo(() => {
    return new Map(colWidthList.map(({ field, width }) => [field, width]))
  }, [colWidthList])

  return (
    <TableRow>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('date') }} className={styles.tableCellContent}>
          {dateString}
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('name') }} className={styles.tableCellContent}>
          {jobName}
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('startedAt') }} className={styles.tableCellContent}>
          <TimeInput value="0:00" onChange={() => {}} className={styles.textInput} />
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('endedAt') }} className={styles.tableCellContent}>
          <TimeInput value="0:00" onChange={() => {}} className={styles.textInput} />
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('workTime') }} className={styles.tableCellContent}>
          <TextInput className={styles.textInput} />
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('note') }} className={styles.tableCellContent}>
          <IconButton className={styles.iconButton} onClick={() => {}}>
            <EllipsisIcon size={20} />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  )
}
