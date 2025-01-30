import { useEffect, useState } from 'react'

import type { Job } from '@/types/job'
import { fetchJobs } from '@/usecases/jobs'

export const useJobs = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    ;(async () => {
      const result = await fetchJobs()
      setJobs(result)
      setLoading(false)
    })()
  }, [])

  return { loading, jobs, setJobs }
}
