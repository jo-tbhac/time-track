import type { Job } from '@/types/job'
import { UpdateJob } from '@wails/go/main/App'

interface Params {
  id: number
  name: string
  hourlyWage: number
}

const updateJob = async (params: Params): Promise<Job> => {
  const job = await UpdateJob(params)
  return { id: job.id, name: job.name, hourlyWage: job.hourlyWage }
}

export default updateJob
