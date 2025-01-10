import { zodResolver } from '@hookform/resolvers/zod'
import { confirmSignIn } from 'aws-amplify/auth'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { FormLabel } from '@/components/ui/FormLabel'
import { Panel } from '@/components/ui/Panel'
import { TextInput } from '@/components/ui/TextInput'
import { Typography } from '@/components/ui/Typography'
import { useNavigate } from '@/lib/router'

import styles from './RegisterNewPassword.css'
import { type FormSchema, formSchema } from './RegisterNewPassword.schema'

export const RegisterNewPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<FormSchema>({
    defaultValues: { password: '', passwordConfirmation: '' },
    resolver: zodResolver(formSchema)
  })

  const navigate = useNavigate()

  const onSubmit = async (data: FormSchema) => {
    await confirmSignIn({ challengeResponse: data.password })
    navigate('/', { replace: true })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Panel className={styles.panel}>
          <div className={styles.titleContainer}>
            <Typography bold fontSize="textL" color="gray">
              新しいパスワードを設定
            </Typography>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formSection}>
              <FormLabel htmlFor="registration-password">新しいパスワード</FormLabel>
              <TextInput id="registration-password" type="password" {...register('password')} />
              {errors.password?.message && <FormErrorText>{errors.password.message}</FormErrorText>}
            </div>
            <div className={styles.formSection}>
              <FormLabel htmlFor="registration-password-confirmation">
                新しいパスワード（確認用）
              </FormLabel>
              <TextInput
                id="registration-password-confirmation"
                type="password"
                {...register('passwordConfirmation')}
              />
              {errors.passwordConfirmation?.message && (
                <FormErrorText>{errors.passwordConfirmation.message}</FormErrorText>
              )}
            </div>
          </div>

          <Button type="submit" loading={isSubmitting}>
            パスワードを更新
          </Button>
        </Panel>
      </div>
    </form>
  )
}
