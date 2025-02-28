import type { Record as RecordType } from '@/types/record'
import { CreateRecord } from '@wails/go/main/App'

interface Params {
  startedAt: Date
  endedAt: Date | null
  note: string
  workTime: number
  jobId: number
}

const createRecord = async (params: Params): Promise<RecordType> => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const record = await CreateRecord(params as any)
  return {
    id: record.id,
    startedAt: new Date(record.startedAt),
    endedAt: record.endedAt ? new Date(record.endedAt) : null,
    note: record.note,
    workTime: record.workTime,
    jobId: record.jobId
  }
}

export default createRecord
