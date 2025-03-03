import { useState } from 'react'

import { deleteJob as deleteJonUseCase } from '@/usecases/jobs'

export const useDeleteJob = () => {
  const [deleting, setDeleting] = useState(false)

  const deleteJob = async (id: number) => {
    try {
      setDeleting(true)
      await deleteJonUseCase(id)
    } finally {
      setDeleting(false)
    }
  }

  return { deleting, deleteJob }
}
