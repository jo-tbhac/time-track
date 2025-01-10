import { signOut } from 'aws-amplify/auth'
import { useState } from 'react'

export const useSignOut = () => {
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    try {
      setLoading(true)
      await signOut()
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleSignOut }
}
