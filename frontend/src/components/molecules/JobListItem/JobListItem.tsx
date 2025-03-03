import type { Dispatch, FC, SetStateAction } from 'react'
import { useState } from 'react'

import { OutlinedButton } from '@/components/atoms/OutlinedButton'
import { TableCell, TableRow } from '@/components/atoms/Table'
import { DeleteConfirmDialog } from '@/components/molecules/DeleteConfirmDialog'
import { JobListItemForm } from '@/components/molecules/JobListItemForm'
import type { Job } from '@/types/job'

import styles from './JobListItem.css'
import { useDeleteJob } from './hooks'

interface Props {
  job: Job
  persisted: boolean
  setJobs: Dispatch<SetStateAction<Job[]>>
}

export const JobListItem: FC<Props> = ({ job, persisted, setJobs }) => {
  const [editing, setEditing] = useState(!persisted)

  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState(false)

  const { deleteJob, deleting } = useDeleteJob()

  const handleClickEdit = () => {
    setEditing(true)
  }

  const closeForm = () => {
    setEditing(false)
    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== 0))
  }

  const handleClickDelete = () => {
    setOpenDeleteConfirmDialog(true)
  }

  const closeDeleteConfirmDialog = () => {
    setOpenDeleteConfirmDialog(false)
  }

  const handleDeleteJob = async () => {
    await deleteJob(job.id)
    setJobs((currentJobs) => currentJobs.filter(({ id }) => id !== job.id))
    closeDeleteConfirmDialog()
  }

  if (editing) {
    return (
      <JobListItemForm job={job} persisted={persisted} closeForm={closeForm} setJobs={setJobs} />
    )
  }

  return (
    <>
      <TableRow className={styles.tableRow}>
        <TableCell>{job.name}</TableCell>
        <TableCell>{job.hourlyWage}</TableCell>
        <TableCell>
          <div className={styles.actions}>
            <OutlinedButton type="button" size="small" color="primary" onClick={handleClickEdit}>
              編集
            </OutlinedButton>
            <OutlinedButton type="button" size="small" color="danger" onClick={handleClickDelete}>
              削除
            </OutlinedButton>
          </div>
        </TableCell>
      </TableRow>

      <DeleteConfirmDialog
        open={openDeleteConfirmDialog}
        title="仕事データを削除"
        description="削除してもよろしいですか？"
        deleting={deleting}
        handleCancel={closeDeleteConfirmDialog}
        handleConfirm={handleDeleteJob}
      />
    </>
  )
}
