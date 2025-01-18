import { zodResolver } from '@hookform/resolvers/zod'
import type { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { TableCell, TableRow } from '@/components/ui/Table'
import { TextInput } from '@/components/ui/TextInput'
import type { Job } from '@/types/job'

import styles from './JobListItemForm.css'
import { type FormSchema, formSchema } from './JobListItemForm.schema'
import { useCreateJob, useUpdateJob } from './hooks'

interface Props {
  job: Job
  persisted: boolean
  closeForm: () => void
  setJobs: Dispatch<SetStateAction<Job[]>>
}

export const JobListItemForm: FC<Props> = ({ job, persisted, closeForm, setJobs }) => {
  const {
    register,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<FormSchema>({
    defaultValues: {
      name: job.name,
      hourlyWage: job.hourlyWage
    },
    resolver: zodResolver(formSchema)
  })

  const { createJob, creating } = useCreateJob()
  const { updateJob, updating } = useUpdateJob()

  const handleSubmit = async () => {
    const isValid = await trigger()
    if (!isValid) {
      return
    }
    const { name, hourlyWage: hourlyWageStr } = getValues()
    const hourlyWage = Number(hourlyWageStr)

    if (persisted) {
      const updatedJob = await updateJob(job.id, { name, hourlyWage })
      setJobs((currentJobs) =>
        currentJobs.map((currentJob) => (currentJob.id === updatedJob.id ? updatedJob : currentJob))
      )
      closeForm()
      return
    }

    const createdJob = await createJob({ name, hourlyWage })
    setJobs((currentJobs) =>
      currentJobs.map((currentJob) => (currentJob.id === job.id ? createdJob : currentJob))
    )
    closeForm()
  }

  return (
    <TableRow className={styles.tableRow}>
      <TableCell className={styles.inputCell}>
        <TextInput type="text" className={styles.nameInput} {...register('name')} />
        {errors.name?.message && <FormErrorText>{errors.name.message}</FormErrorText>}
      </TableCell>
      <TableCell className={styles.inputCell}>
        <TextInput type="number" className={styles.hourlyWageInput} {...register('hourlyWage')} />
        {errors.hourlyWage?.message && <FormErrorText>{errors.hourlyWage.message}</FormErrorText>}
      </TableCell>
      <TableCell>
        <div className={styles.actions}>
          <Button type="button" size="small" loading={creating || updating} onClick={handleSubmit}>
            保存
          </Button>
          <Button type="button" size="small" color="secondary" onClick={closeForm}>
            キャンセル
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
