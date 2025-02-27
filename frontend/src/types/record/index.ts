export interface Record {
  id: number
  startedAt: string
  endedAt: string | null
  note: string
  workTime: number
  jobId: number
}
