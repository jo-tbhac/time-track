import type { FC, ReactNode } from 'react'

import styles from './Panel.css'

interface Props {
  children: ReactNode
  className?: string
}

export const Panel: FC<Props> = ({ children, className }) => {
  return <div className={className || styles.container}>{children}</div>
}
