import type { Job } from '@/types/job'
import { CreateJob } from '@wails/go/main/App'

interface Params {
  name: string
  hourlyWage: number
}

const createJob = async (params: Params): Promise<Job> => {
  const job = await CreateJob(params)
  return { id: job.id, name: job.name, hourlyWage: job.hourlyWage }
}

export default createJob
