import type { FC } from 'react'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

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
import type { Job } from '@/types/job'

import { JobListItem } from '../JobListItem'
import styles from './JobList.css'

export const JobList: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1000, name: 'ソフトウェア開発', hourlyWage: 5000 },
    { id: 1001, name: 'デザイン', hourlyWage: 4000 }
  ])

  const handleClickNewJob = () => {
    setJobs((currentJobs) => {
      const hasPersistedRecord = currentJobs.find(({ id }) => id === 0) != null
      if (hasPersistedRecord) {
        return currentJobs
      }
      return [...currentJobs, { id: 0, name: '', hourlyWage: 0 }]
    })
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
          <FaPlus />
          新規作成
        </TextButton>
      </div>
    </>
  )
}
