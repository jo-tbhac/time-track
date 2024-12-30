import { zodResolver } from '@hookform/resolvers/zod'
import type { ConfirmUserAttributeInput } from 'aws-amplify/auth'
import { confirmUserAttribute } from 'aws-amplify/auth'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Alert } from '@/components/ui/Alert'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/Dialog'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { FormLabel } from '@/components/ui/FormLabel'
import { TextInput } from '@/components/ui/TextInput'

import styles from './ConfirmUserAttributeDialog.css'
import { type FormSchema, formSchema } from './ConfirmUserAttributeDialog.schema'

interface Props {
  userAttributeKey: ConfirmUserAttributeInput['userAttributeKey']
  open: boolean
  handleClose: () => void
  handleSuccess?: () => void
}

export const ConfirmUserAttributeDialog: FC<Props> = ({
  userAttributeKey,
  open,
  handleClose,
  handleSuccess
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormSchema>({
    defaultValues: { code: '' },
    resolver: zodResolver(formSchema)
  })

  const [alertMessage, setAlertMessage] = useState<string | undefined>()

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset only when closing
  useEffect(() => {
    if (!open) {
      setAlertMessage(undefined)
      reset()
    }
  }, [open])

  const onSubmit = async (data: FormSchema) => {
    try {
      await confirmUserAttribute({ userAttributeKey, confirmationCode: data.code })
      handleClose()
      handleSuccess?.()
    } catch {
      setAlertMessage('確認コードが正しくありません。')
    }
  }

  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>確認コードの入力</DialogHeader>
        <DialogContent>
          {alertMessage && <Alert className={styles.alert}>{alertMessage}</Alert>}
          <div className={styles.content}>
            <FormLabel htmlFor="confirm-user-attribute-code">確認コード</FormLabel>
            <TextInput id="confirm-user-attribute-code" {...register('code')} />
            {errors.code?.message && <FormErrorText>{errors.code.message}</FormErrorText>}
          </div>
        </DialogContent>
        <DialogFooter>
          <Button type="button" onClick={handleClose} color="secondary" size="small">
            キャンセル
          </Button>
          <Button size="small" loading={isSubmitting}>
            送信
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
