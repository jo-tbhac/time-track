import type { FC, MouseEvent, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { Typography } from '../Typography'
import styles from './Dialog.css'
import { useEscapeKeyClose } from './hooks'

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

export const Dialog: FC<DialogProps> = ({ open, children, handleClose }) => {
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

  useEscapeKeyClose({ open, handleClose })

  const handleClickContainer = (event: MouseEvent) => {
    event.stopPropagation()
  }

  if (!isIn) {
    return null
  }

  return createPortal(
    // biome-ignore lint/a11y/useKeyWithClickEvents: handled by useEscapeKeyClose
    <div ref={dialogRef} className={styles.overlay} onClick={handleClose}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: just stop propagation of events */}
      <div className={styles.container} onClick={handleClickContainer}>
        {children}
      </div>
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
