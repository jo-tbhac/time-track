import { zodResolver } from '@hookform/resolvers/zod'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/Button'
import { FormErrorText } from '@/components/ui/FormErrorText'
import { FormLabel } from '@/components/ui/FormLabel'
import { Panel } from '@/components/ui/Panel'
import { TextInput } from '@/components/ui/TextInput'

import styles from './SignIn.css'
import { type FormSchema, formSchema } from './SignIn.schema'

export const SignIn: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<FormSchema>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormSchema) => {
    console.log('data: ', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Panel className={styles.panel}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.formWrapper}>
            <div className={styles.formSection}>
              <FormLabel htmlFor="signin-email">メールアドレス</FormLabel>
              <TextInput id="signin-email" {...register('email')} />
              {errors.email?.message && <FormErrorText>{errors.email.message}</FormErrorText>}
            </div>
            <div className={styles.formSection}>
              <FormLabel htmlFor="signin-password">パスワード</FormLabel>
              <TextInput id="signin-password" type="password" {...register('password')} />
              {errors.password?.message && <FormErrorText>{errors.password.message}</FormErrorText>}
            </div>
          </div>

          <Button type="submit" loading={isSubmitting}>
            ログイン
          </Button>
        </Panel>
      </div>
    </form>
  )
}
