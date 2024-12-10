import type { FC } from 'react'

import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/Button'
import { FormLabel } from '@/components/ui/FormLabel'
import { Panel } from '@/components/ui/Panel'
import { TextInput } from '@/components/ui/TextInput'

import styles from './SignIn.css'

export const SignIn: FC = () => {
  return (
    <form>
      <div className={styles.container}>
        <Panel className={styles.panel}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.formWrapper}>
            <div className={styles.formSection}>
              <FormLabel htmlFor="signin-email">メールアドレス</FormLabel>
              <TextInput id="signin-email" />
            </div>
            <div className={styles.formSection}>
              <FormLabel htmlFor="signin-password">パスワード</FormLabel>
              <TextInput id="signin-password" type="password" />
            </div>
          </div>

          <Button type="submit">ログイン</Button>
        </Panel>
      </div>
    </form>
  )
}
