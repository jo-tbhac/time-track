import type { Job } from '@/types/job'
import { FindJobs } from '@wails/go/main/App'

const fetchJobs = async (): Promise<Job[]> => {
  const jobs = await FindJobs()
  return jobs.map((job) => ({ id: job.id, name: job.name, hourlyWage: job.hourlyWage }))
}

export default fetchJobs
