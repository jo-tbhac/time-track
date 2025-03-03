import type { FC } from 'react'

import { format } from '@/lib/date'

import { Typography } from '../Typography'
import styles from './Clock.css'
import { useCurrentTime } from './hooks'

export const Clock: FC = () => {
  const currentTime = useCurrentTime()

  const date = format(currentTime, 'yyyy年M月d日 E')
  const time = format(currentTime, 'HH:mm')
  const second = format(currentTime, 'ss')

  return (
    <div className={styles.container}>
      <div className={styles.dateContainer}>
        <Typography bold fontSize="textM">
          {date}
        </Typography>
      </div>
      <div className={styles.timeContainer}>
        <span className={styles.time}>{time}</span>
        <Typography bold fontSize="textM">
          {second}
        </Typography>
      </div>
    </div>
  )
}
