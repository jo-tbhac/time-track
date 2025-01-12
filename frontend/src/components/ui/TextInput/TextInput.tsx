import type { ComponentProps, FC } from 'react'

import styles from './TextInput.css'

interface Props extends ComponentProps<'input'> {}

export const TextInput: FC<Props> = ({ className, ...props }) => {
  const classNames = [styles.container, className].join(' ')

  return <input className={classNames} {...props} />
}
