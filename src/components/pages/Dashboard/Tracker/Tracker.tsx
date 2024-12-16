import type { FC } from 'react'

import { Clock } from '@/components/model/Clock'
import { TrackButton } from '@/components/model/TrackButton'
import { Typography } from '@/components/ui/Typography'

import styles from './Tracker.css'

export const Tracker: FC = () => {
  const handleClickStart = () => {}
  const handleClickEnd = () => {}

  return (
    <div className={styles.container}>
      <Clock />
      <div className={styles.buttonContainer}>
        <TrackButton handleClick={handleClickStart}>
          <Typography bold fontSize="textXS">
            開始
          </Typography>
        </TrackButton>
        <TrackButton handleClick={handleClickEnd}>
          <Typography bold fontSize="textXS">
            終了
          </Typography>
        </TrackButton>
      </div>
    </div>
  )
}