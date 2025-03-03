import type { ComponentProps, FC } from 'react'

import styles from './IconButton.css'

interface Props extends Pick<ComponentProps<'button'>, 'children' | 'className' | 'onClick'> {}

export const IconButton: FC<Props> = ({ children, className, onClick }) => {
  const classNames = [styles.container, className].join(' ')

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}
