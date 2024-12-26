import type { FC, ReactNode } from 'react'

import { Typography } from '../Typography'

import styles from './Alert.css'

interface Props {
  icon?: ReactNode
  children: string
  className?: string
}

export const Alert: FC<Props> = ({ icon, children, className }) => {
  const classNames = [styles.container, className].join(' ')

  return (
    <div className={classNames}>
      {icon}
      <Typography color="danger" fontSize="textS">
        {children}
      </Typography>
    </div>
  )
}
