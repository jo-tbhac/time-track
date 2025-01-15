import type { Dispatch, FC, SetStateAction } from 'react'
import { useState } from 'react'

import { OutlinedButton } from '@/components/ui/OutlinedButton'
import { TableCell, TableRow } from '@/components/ui/Table'
import type { Job } from '@/types/job'

import { JobListItemForm } from '../JobListItemForm'
import styles from './JobListItem.css'

interface Props {
  job: Job
  persisted: boolean
  setJobs: Dispatch<SetStateAction<Job[]>>
}

export const JobListItem: FC<Props> = ({ job, persisted, setJobs }) => {
  const [editing, setEditing] = useState(!persisted)

  const handleClickEdit = () => {
    setEditing(true)
  }

  const closeForm = () => {
    setEditing(false)
    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== 0))
  }

  if (editing) {
    return (
      <JobListItemForm job={job} persisted={persisted} closeForm={closeForm} setJobs={setJobs} />
    )
  }

  return (
    <TableRow className={styles.tableRow}>
      <TableCell>{job.name}</TableCell>
      <TableCell>{job.hourlyWage}</TableCell>
      <TableCell>
        <div className={styles.actions}>
          <OutlinedButton type="button" size="small" color="primary" onClick={handleClickEdit}>
            編集
          </OutlinedButton>
          <OutlinedButton type="button" size="small" color="danger">
            削除
          </OutlinedButton>
        </div>
      </TableCell>
    </TableRow>
  )
}
