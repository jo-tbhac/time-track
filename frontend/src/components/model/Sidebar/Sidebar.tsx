import type { FC } from 'react'
import { FaEllipsis, FaHouse } from 'react-icons/fa6'

import { IconButton } from '@/components/ui/IconButton'
import { Typography } from '@/components/ui/Typography'
import { useNavigate } from '@/lib/router'

import styles from './Sidebar.css'

export const Sidebar: FC = () => {
  const navigate = useNavigate()

  const handleClickHomeButton = () => {
    navigate('/dashboard')
  }

  const handleClickSettingButton = () => {
    navigate('/setting')
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <IconButton className={styles.iconButton} onClick={handleClickHomeButton}>
          <FaHouse size={20} />
          <Typography fontSize="textXXS" bold color="white">
            ホーム
          </Typography>
        </IconButton>
        <IconButton className={styles.iconButton} onClick={handleClickSettingButton}>
          <FaEllipsis size={20} />
          <Typography fontSize="textXXS" bold color="white">
            設定
          </Typography>
        </IconButton>
      </div>
    </div>
  )
}
