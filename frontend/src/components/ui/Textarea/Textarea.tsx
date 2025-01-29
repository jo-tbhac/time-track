import type { ComponentProps, FC } from 'react'

import styles from './Textarea.css'

interface Props extends ComponentProps<'textarea'> {}

export const Textarea: FC<Props> = ({ className, ...props }) => {
  const classNames = [styles.container, className].join(' ')

  return <textarea className={classNames} {...props} />
}
