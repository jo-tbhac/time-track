import type { FC } from 'react'

import { IconButton } from '@/components/ui/IconButton'
import { Typography } from '@/components/ui/Typography'
import { EllipsisIcon, HouseIcon } from '@/lib/icons'
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
          <HouseIcon size={20} />
          <Typography fontSize="textXXS" bold color="white">
            ホーム
          </Typography>
        </IconButton>
        <IconButton className={styles.iconButton} onClick={handleClickSettingButton}>
          <EllipsisIcon size={20} />
          <Typography fontSize="textXXS" bold color="white">
            設定
          </Typography>
        </IconButton>
      </div>
    </div>
  )
}
