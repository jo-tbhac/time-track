import type { FC } from 'react'
import { useState } from 'react'

import { CreateRecordDialog } from '@/components/model/CreateRecordDialog'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { format } from '@/lib/date'

import styles from './RecordListPanelHeader.css'

export const RecordListPanelHeader: FC = () => {
  const [openCreateRecordDialog, setOpenCreateRecordDialog] = useState(false)

  const handleClickCreateButton = () => {
    setOpenCreateRecordDialog(true)
  }

  const closeCreateRecordDialog = () => {
    setOpenCreateRecordDialog(false)
  }

  const currentMonthLabel = format(new Date(), 'yyyy年M月')

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography color="black" fontSize="textM" bold>
            {currentMonthLabel}の勤怠一覧
          </Typography>
        </div>
        <Button type="button" onClick={handleClickCreateButton}>
          勤怠データを作成
        </Button>
      </div>

      {openCreateRecordDialog && <CreateRecordDialog open closeDialog={closeCreateRecordDialog} />}
    </>
  )
}
