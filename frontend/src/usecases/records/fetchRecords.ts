import type { Record } from '@/types/record'
import { FindRecords } from '@wails/go/main/App'

const fetchRecords = async (): Promise<Record[]> => {
  const records = await FindRecords()

  return records.map((record) => ({
    id: record.id,
    startedAt: new Date(record.startedAt),
    endedAt: record.endedAt ? new Date(record.endedAt) : null,
    note: record.note,
    workTime: record.workTime,
    jobId: record.jobId
  }))
}

export default fetchRecords
