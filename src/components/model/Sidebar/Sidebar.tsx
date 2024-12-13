import type { FC } from 'react'
import { FaArrowRightFromBracket, FaEllipsis, FaHouse } from 'react-icons/fa6'

import { IconButton } from '@/components/ui/IconButton'
import { Typography } from '@/components/ui/Typography'

import styles from './Sidebar.css'

export const Sidebar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <IconButton className={styles.iconButton}>
          <FaHouse size={20} />
          <Typography fontSize="textXXS" bold color="white">
            ホーム
          </Typography>
        </IconButton>
        <IconButton className={styles.iconButton}>
          <FaEllipsis size={20} />
          <Typography fontSize="textXXS" bold color="white">
            設定
          </Typography>
        </IconButton>
      </div>
      <IconButton className={styles.iconButton}>
        <FaArrowRightFromBracket size={20} />
        <Typography fontSize="textXXS" bold color="white">
          ログアウト
        </Typography>
      </IconButton>
    </div>
  )
}
