import type { FC, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { Typography } from '../Typography'
import styles from './Dialog.css'

interface DialogProps {
  open: boolean
  handleClose: () => void
  children: ReactNode
}

interface DialogHeaderProps {
  children: ReactNode
}

interface DialogContentProps {
  children: ReactNode
}

interface DialogFooterProps {
  children: ReactNode
}

export const Dialog: FC<DialogProps> = ({ open, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  const [isIn, setIsIn] = useState(open)

  useEffect(() => {
    if (open) {
      setIsIn(true)
      return
    }
    dialogRef.current?.classList.add('fadeOut')
    setTimeout(() => {
      setIsIn(false)
    }, 200)
  }, [open])

  if (!isIn) {
    return null
  }

  return createPortal(
    <div ref={dialogRef} className={styles.overlay}>
      <div className={styles.container}>{children}</div>
    </div>,
    document.body
  )
}

export const DialogHeader: FC<DialogHeaderProps> = ({ children }) => {
  return (
    <div className={styles.header}>
      <Typography bold fontSize="textL">
        {children}
      </Typography>
    </div>
  )
}

export const DialogContent: FC<DialogContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}

export const DialogFooter: FC<DialogFooterProps> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>
}
