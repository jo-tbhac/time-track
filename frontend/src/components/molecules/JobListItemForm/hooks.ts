import { useState } from 'react'

import { createJob as createJobUseCase, updateJob as updateJobUseCase } from '@/usecases/jobs'

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

export const useUpdateJob = () => {
  const [updating, setUpdating] = useState(false)

  const updateJob = async (id: number, params: FormSchema) => {
    try {
      setUpdating(true)
      const job = await updateJobUseCase({ id, ...params })
      return job
    } finally {
      setUpdating(false)
    }
  }

  return { updating, updateJob }
}
