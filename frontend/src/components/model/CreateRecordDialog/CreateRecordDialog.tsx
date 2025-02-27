import { zodResolver } from '@hookform/resolvers/zod'
import type { FC } from 'react'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { TimeInput } from '@/components/model/TimeInput'
import { Button } from '@/components/ui/Button'
import { DatePicker } from '@/components/ui/DatePicker'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/Dialog'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { FormLabel } from '@/components/ui/FormLabel'
import { Select } from '@/components/ui/Select'
import { TextInput } from '@/components/ui/TextInput'
import { Textarea } from '@/components/ui/Textarea'
import { useJobs } from '@/hooks/useJobs'
import { createRecord } from '@/usecases/records'

import styles from './CreateRecordDialog.css'
import { type FormSchema, formSchema } from './CreateRecordDialog.schema'

interface Props {
  open: boolean
  closeDialog: () => void
}

export const CreateRecordDialog: FC<Props> = ({ open, closeDialog }) => {
  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      jobId: 0,
      startedAt: '',
      endedAt: '',
      workTime: 0,
      note: ''
    }
  })

  const { jobs } = useJobs()

  const selectOptions = useMemo(() => {
    const options = jobs.map((job) => ({ label: job.name, value: job.id }))
    return [{ label: '選択してください', value: 0 }, ...options]
  }, [jobs])

  const onSubmit = async (data: FormSchema) => {
    const selectedDate = data.date
    const [startedHour, startedMinute] = data.startedAt.split(':')
    let endedAt: number | null = null
    if (data.endedAt) {
      const [endedHour, endedMinute] = data.endedAt.split(':')
      endedAt = selectedDate.setHours(Number(endedHour), Number(endedMinute))
    }

    const startedAt = selectedDate.setHours(Number(startedHour), Number(startedMinute))
    await createRecord({
      startedAt: new Date(startedAt),
      endedAt: endedAt ? new Date(endedAt) : null,
      note: data.note,
      workTime: data.workTime,
      jobId: data.jobId
    })

    // TODO add created record to list
  }

  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>勤怠データを作成</DialogHeader>
        <DialogContent>
          <div className={styles.container}>
            <div className={styles.dateForm}>
              <FormLabel htmlFor="create-record-input-date">日付</FormLabel>
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <DatePicker
                      id="create-record-input-date"
                      value={value}
                      handleChangeDate={onChange}
                    />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
            <div className={styles.nameForm}>
              <FormLabel htmlFor="create-record-input-name">名称</FormLabel>
              <Controller
                name="jobId"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <Select options={selectOptions} value={value} onChange={onChange} />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
            <div className={styles.startTimeForm}>
              <FormLabel htmlFor="create-record-input-start-time">開始時間</FormLabel>
              <Controller
                name="startedAt"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <TimeInput
                      id="create-record-input-start-time"
                      value={value}
                      onChange={onChange}
                    />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
            <div className={styles.endTimeForm}>
              <FormLabel htmlFor="create-record-input-end-time">終了時間</FormLabel>
              <Controller
                name="endedAt"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <TimeInput
                      id="create-record-input-end-time"
                      value={value}
                      onChange={onChange}
                    />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
            <div className={styles.workTimeForm}>
              <FormLabel htmlFor="create-record-input-work-time">勤務時間</FormLabel>
              <Controller
                name="workTime"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <TextInput
                      type="text"
                      id="create-record-input-work-time"
                      value={value}
                      onChange={onChange}
                    />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
            <div className={styles.noteForm}>
              <FormLabel htmlFor="create-record-input-note">備考</FormLabel>
              <Controller
                name="note"
                control={control}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <>
                    <Textarea id="create-record-input-note" value={value} onChange={onChange} />
                    {error?.message && <FormErrorText>{error.message}</FormErrorText>}
                  </>
                )}
              />
            </div>
          </div>
        </DialogContent>
        <DialogFooter>
          <Button type="button" color="secondary" onClick={closeDialog}>
            キャンセル
          </Button>
          <Button type="submit">保存</Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
