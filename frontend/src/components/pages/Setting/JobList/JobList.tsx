import type { FC } from 'react'

import {
  Col,
  ColGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@/components/ui/Table'
import { TextButton } from '@/components/ui/TextButton'
import { PlusIcon } from '@/lib/icons'

import { JobListItem } from '../JobListItem'
import styles from './JobList.css'
import { useJobs } from './hooks'

export const JobList: FC = () => {
  const { loading, jobs, setJobs } = useJobs()

  const handleClickNewJob = () => {
    setJobs((currentJobs) => {
      const hasPersistedRecord = currentJobs.find(({ id }) => id === 0) != null
      if (hasPersistedRecord) {
        return currentJobs
      }
      return [...currentJobs, { id: 0, name: '', hourlyWage: 0 }]
    })
  }

  // TODO loading
  if (loading) {
    return null
  }

  return (
    <>
      <TableContainer>
        <Table>
          <ColGroup>
            <Col width={300} />
            <Col width={120} />
            <Col width={200} />
          </ColGroup>
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell>単価</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <JobListItem key={job.id} job={job} persisted={job.id !== 0} setJobs={setJobs} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.buttonContainer}>
        <TextButton type="button" onClick={handleClickNewJob}>
          <PlusIcon />
          新規作成
        </TextButton>
      </div>
    </>
  )
}
