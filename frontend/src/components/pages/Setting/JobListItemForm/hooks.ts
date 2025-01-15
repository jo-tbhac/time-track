import { useState } from 'react'

import { createJob as createJobUseCase } from '@/usecases/jobs'

import type { FormSchema } from './JobListItemForm.schema'

export const useCreateJob = () => {
  const [creating, setCreating] = useState(false)

  const createJob = async (params: FormSchema) => {
    try {
      setCreating(true)
      const job = await createJobUseCase(params)
      return job
    } finally {
      setCreating(false)
    }
  }

  return { creating, createJob }
}
