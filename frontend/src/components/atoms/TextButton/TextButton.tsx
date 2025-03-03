import type { ComponentProps, FC } from 'react'

import styles from './TextButton.css'

interface Props extends ComponentProps<'button'> {
  color?: keyof typeof styles.button.classNames.variants.color
}

export const TextButton: FC<Props> = ({
  color = 'primary',
  children,
  className,
  ...buttonProps
}) => {
  const classNames = [styles.button({ color }), className].join(' ')

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  )
}
