import { getCurrentUser } from 'aws-amplify/auth'
import { Hub } from 'aws-amplify/utils'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { Navigate, Outlet } from '@/lib/router'

const AUTH_STATUS = {
  pending: 'pending',
  signedIn: 'signedIn',
  signedOut: 'signedOut'
} as const

type AuthStatus = (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS]

export const ProtectedPage: FC = () => {
  const [status, setStatus] = useState<AuthStatus>(AUTH_STATUS.pending)

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        setStatus(AUTH_STATUS.signedIn)
      })
      .catch(() => {
        setStatus(AUTH_STATUS.signedOut)
      })
  }, [])

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case AUTH_STATUS.signedOut:
          setStatus(AUTH_STATUS.signedOut)
          break
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (status === AUTH_STATUS.pending) {
    // TODO loading
    return null
  }
  if (status === AUTH_STATUS.signedOut) {
    return <Navigate to="/sign-in" />
  }

  return <Outlet />
}
