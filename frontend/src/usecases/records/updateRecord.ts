import type { Record as RecordType } from '@/types/record'
import { UpdateRecord } from '@wails/go/main/App'

interface Params {
  id: number
  startedAt?: Date
  endedAt?: Date | null
  note?: string
  workTime?: number
  shouldUpdateEndedAt?: boolean
}

const updateRecord = async ({
  shouldUpdateEndedAt = false,
  ...rest
}: Params): Promise<RecordType> => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const record = await UpdateRecord({ ...rest, shouldUpdateEndedAt } as any)
  return {
    id: record.id,
    startedAt: new Date(record.startedAt),
    endedAt: record.endedAt ? new Date(record.endedAt) : null,
    note: record.note,
    workTime: record.workTime,
    jobId: record.jobId
  }
}

export default updateRecord
