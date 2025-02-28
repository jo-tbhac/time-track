import { useEffect, useState } from 'react'

import type { Record as RecordType } from '@/types/record'
import { fetchRecords } from '@/usecases/records'

export const useRecords = () => {
  const [records, setRecords] = useState<RecordType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const records = await fetchRecords()
      setRecords(records)
      setLoading(false)
    })()
  }, [])

  return { records, setRecords, loading }
}
