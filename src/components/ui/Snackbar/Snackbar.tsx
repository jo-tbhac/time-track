import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './Snackbar.css'

interface Props {
  open: boolean
  text: string
  color: 'success' | 'alert'
  autoHideDuration?: number
  handleClose: () => void
}

export const Snackbar: FC<Props> = ({
  open,
  text,
  color,
  autoHideDuration = 3000,
  handleClose
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isIn, setIsIn] = useState(open)

  useEffect(() => {
    if (open) {
      setIsIn(true)
    } else {
      setIsIn(false)
    }
  }, [open])

  // biome-ignore lint/correctness/useExhaustiveDependencies: call only when hiding
  useEffect(() => {
    if (!isIn) {
      return
    }

    setTimeout(() => {
      ref.current?.classList.add('fadeOut')
    }, autoHideDuration)
    setTimeout(() => {
      handleClose()
    }, autoHideDuration + 200)
  }, [isIn])

  if (!isIn) {
    return null
  }

  return createPortal(
    <div ref={ref} className={styles.container({ color })}>
      {text}
    </div>,
    document.body
  )
}
