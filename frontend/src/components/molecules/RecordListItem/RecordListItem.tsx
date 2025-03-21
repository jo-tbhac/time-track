import type { ChangeEvent, FC } from 'react'
import { useMemo, useState } from 'react'

import { IconButton } from '@/components/atoms/IconButton'
import { TableCell, TableRow } from '@/components/atoms/Table'
import { TextInput } from '@/components/atoms/TextInput'
import { TimeInput } from '@/components/atoms/TimeInput'
import type { useCalcColWidth } from '@/hooks/useCalcColWidth'
import { format } from '@/lib/date'
import { EllipsisIcon } from '@/lib/icons'
import type { Job } from '@/types/job'
import type { Record as RecordType } from '@/types/record'
import { updateRecord } from '@/usecases/records'

import styles from './RecordListItem.css'

interface Props {
  record: RecordType
  jobs: Job[]
  colWidthList: ReturnType<typeof useCalcColWidth>
}

export const RecordListItem: FC<Props> = ({ record, jobs, colWidthList }) => {
  const [startedTimeStr, setStartedTimeStr] = useState(() => format(record.startedAt, 'H:mm'))
  const [endedTimeStr, setEndedTimeStr] = useState(() =>
    record.endedAt ? format(record.endedAt, 'H:mm') : ''
  )
  const [workTime, setWorkTime] = useState(record.workTime)

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

  const parseTimeStrToDate = (timeStr: string, date: Date): Date | null => {
    if (!timeStr) {
      return null
    }
    const [hour, minute] = timeStr.split(':')
    const parsedDate = date.setHours(Number(hour), Number(minute))

    return new Date(parsedDate)
  }

  const handleChangeStartedAt = (newValue: string) => {
    setStartedTimeStr(newValue)
  }

  const handleChangeEndedAt = (newValue: string) => {
    setEndedTimeStr(newValue)
  }

  const handleChangeWorkTime = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (/^\d+$/.test(newValue)) {
      setWorkTime(Number(newValue))
    }
  }

  const handleBlurStartedAt = (currentValue: string) => {
    const defaultValue = format(record.startedAt, 'H:mm')
    if (currentValue === defaultValue) {
      return
    }
    const newDate = parseTimeStrToDate(currentValue, record.startedAt)
    if (newDate == null) {
      return
    }
    updateRecord({ id: record.id, startedAt: newDate })
  }

  const handleBlurEndedAt = (currentValue: string) => {
    const defaultValue = record.endedAt ? format(record.endedAt, 'H:mm') : ''
    if (currentValue === defaultValue) {
      return
    }
    const newDate = parseTimeStrToDate(currentValue, record.startedAt)
    updateRecord({ id: record.id, endedAt: newDate, shouldUpdateEndedAt: true })
  }

  const handleBlurWorkTime = () => {
    updateRecord({ id: record.id, workTime })
  }

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
          <TimeInput
            value={startedTimeStr}
            onChange={handleChangeStartedAt}
            onBlur={handleBlurStartedAt}
            className={styles.textInput}
          />
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('endedAt') }} className={styles.tableCellContent}>
          <TimeInput
            value={endedTimeStr}
            onChange={handleChangeEndedAt}
            onBlur={handleBlurEndedAt}
            className={styles.textInput}
          />
        </div>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <div style={{ width: colWidthMap.get('workTime') }} className={styles.tableCellContent}>
          <TextInput
            value={workTime}
            onChange={handleChangeWorkTime}
            onBlur={handleBlurWorkTime}
            className={styles.textInput}
          />
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
