import type { FC } from 'react'
import { useState } from 'react'
import { FaArrowRightFromBracket, FaEllipsis, FaHouse } from 'react-icons/fa6'

import { SignOutConfirmDialog } from '@/components/model/SignOutConfirmDialog'
import { IconButton } from '@/components/ui/IconButton'
import { Typography } from '@/components/ui/Typography'
import { useNavigate } from '@/lib/router'

import styles from './Sidebar.css'

export const Sidebar: FC = () => {
  const [openSignOutDialog, setOpenSignOutDialog] = useState(false)

  const navigate = useNavigate()

  const handleOpenSignOutDialog = () => {
    setOpenSignOutDialog(true)
  }

  const handleCloseSignOutDialog = () => {
    setOpenSignOutDialog(false)
  }

  const handleClickSettingButton = () => {
    navigate('/setting')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <IconButton className={styles.iconButton}>
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
        <IconButton className={styles.iconButton} onClick={handleOpenSignOutDialog}>
          <FaArrowRightFromBracket size={20} />
          <Typography fontSize="textXXS" bold color="white">
            ログアウト
          </Typography>
        </IconButton>
      </div>

      <SignOutConfirmDialog open={openSignOutDialog} handleClose={handleCloseSignOutDialog} />
    </>
  )
}
