import { zodResolver } from '@hookform/resolvers/zod'
import { fetchUserAttributes, updateUserAttribute } from 'aws-amplify/auth'
import type { FC } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ConfirmUserAttributeDialog } from '@/components/model/ConfirmUserAttributeDialog'
import { Button } from '@/components/ui/Button'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { FormLabel } from '@/components/ui/FormLabel'
import { Snackbar } from '@/components/ui/Snackbar'
import { TextInput } from '@/components/ui/TextInput'

import styles from './UpdateEmailForm.css'
import { type FormSchema, formSchema } from './UpdateEmailForm.schema'

export const UpdateEmailForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<FormSchema>({
    defaultValues: async () => {
      const result = await fetchUserAttributes().catch(() => ({ email: '' }))
      return { email: result.email ?? '' }
    },
    resolver: zodResolver(formSchema)
  })

  const [openDialog, setOpenDialog] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const onSubmit = async (data: FormSchema) => {
    const { nextStep } = await updateUserAttribute({
      userAttribute: {
        attributeKey: 'email',
        value: data.email
      }
    })

    if (nextStep.updateAttributeStep === 'CONFIRM_ATTRIBUTE_WITH_CODE') {
      setOpenDialog(true)
      return
    }

    handleOpenSnackbar()
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.inputField}>
            <FormLabel htmlFor="setting-email">メールアドレス</FormLabel>
            <TextInput id="setting-email" {...register('email')} />
            {errors.email?.message && <FormErrorText>{errors.email.message}</FormErrorText>}
          </div>
          <Button size="small" loading={isSubmitting}>
            更新
          </Button>
        </div>
      </form>

      <ConfirmUserAttributeDialog
        userAttributeKey="email"
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSuccess={handleOpenSnackbar}
      />

      <Snackbar
        open={openSnackbar}
        text="メールアドレスを更新しました。"
        color="success"
        handleClose={handleCloseSnackbar}
      />
    </>
  )
}
