import type { FC } from 'react'

import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/Dialog'
import { Typography } from '@/components/ui/Typography'

import { useSignOut } from './hooks'

interface Props {
  open: boolean
  handleClose: () => void
}

export const SignOutConfirmDialog: FC<Props> = ({ open, handleClose }) => {
  const { loading, handleSignOut } = useSignOut()

  return (
    <Dialog open={open} handleClose={handleClose}>
      <DialogHeader>ログアウト</DialogHeader>
      <DialogContent>
        <Typography fontSize="textM">ログアウトしてもよろしいですか？</Typography>
      </DialogContent>
      <DialogFooter>
        <Button type="button" size="small" color="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button
          type="button"
          size="small"
          color="primary"
          onClick={handleSignOut}
          loading={loading}
        >
          ログアウト
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
