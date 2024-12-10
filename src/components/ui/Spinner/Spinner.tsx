import type { FC } from 'react'

import styles from './Spinner.css'

interface Props {
  color?: string
  size?: keyof typeof styles.spinner.classNames.variants.size
}

export const Spinner: FC<Props> = ({ color, size = 'medium' }) => {
  return <div className={styles.spinner({ size })} style={{ borderLeftColor: color }} />
}
