import type { FC, ReactNode } from 'react'

import styles from './IconButton.css'

interface Props {
  children: ReactNode
  className?: string
}

export const IconButton: FC<Props> = ({ children, className }) => {
  return (
    <button type="button" className={className ?? styles.container}>
      {children}
    </button>
  )
}
