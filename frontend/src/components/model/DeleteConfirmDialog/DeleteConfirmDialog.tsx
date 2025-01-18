import type { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/Dialog'
import { Typography } from '@/components/ui/Typography'

interface Props {
  open: boolean
  title: string
  description: string
  deleting?: boolean
  handleConfirm: () => void
  handleCancel: () => void
}

export const DeleteConfirmDialog: FC<Props> = ({
  open,
  title,
  description,
  deleting = false,
  handleConfirm,
  handleCancel
}) => {
  return (
    <Dialog open={open}>
      <DialogHeader>{title}</DialogHeader>
      <DialogContent>
        <Typography color="black" fontSize="textM">
          {description}
        </Typography>
      </DialogContent>
      <DialogFooter>
        <Button type="button" color="secondary" onClick={handleCancel}>
          キャンセル
        </Button>
        <Button type="button" color="danger" loading={deleting} onClick={handleConfirm}>
          削除
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
