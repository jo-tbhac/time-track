import type { FC, ReactNode } from 'react'

import styles from './TrackButton.css'

interface Props {
  children: ReactNode
  handleClick: () => void
  disabled?: boolean
}

export const TrackButton: FC<Props> = ({ children, handleClick, disabled = false }) => {
  return (
    <button className={styles.container} type="button" onClick={handleClick} disabled={disabled}>
      <div className={styles.insideContainer}>{children}</div>
    </button>
  )
}
