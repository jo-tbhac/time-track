import { useEffect } from 'react'

import { onResizeWindow } from './handler'

export const useSubscribeWindowResize = () => {
  useEffect(() => {
    window.addEventListener('resize', onResizeWindow)

    return () => {
      window.removeEventListener('resize', onResizeWindow)
    }
  }, [])
}
