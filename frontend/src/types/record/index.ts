export interface Record {
  id: number
  startedAt: Date
  endedAt: Date | null
  note: string
  workTime: number
  jobId: number
}
