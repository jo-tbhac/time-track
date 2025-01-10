import type { ComponentProps, FC } from 'react'

import styles from './TextInput.css'

interface Props extends ComponentProps<'input'> {}

export const TextInput: FC<Props> = (props) => {
  return <input className={styles.container} {...props} />
}
