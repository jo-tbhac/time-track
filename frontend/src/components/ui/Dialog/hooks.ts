import { useEffect } from 'react'

export const useEscapeKeyClose = ({
  open,
  handleClose
}: { open: boolean; handleClose?: () => void }) => {
  useEffect(() => {
    if (!open || !handleClose) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, open])
}
