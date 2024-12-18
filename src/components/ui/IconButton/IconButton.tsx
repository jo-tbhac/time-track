import type { ComponentProps, FC } from 'react'

import styles from './IconButton.css'

interface Props extends Pick<ComponentProps<'button'>, 'children' | 'className' | 'onClick'> {}

export const IconButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button type="button" className={className ?? styles.container} onClick={onClick}>
      {children}
    </button>
  )
}
