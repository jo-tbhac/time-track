import type { ComponentProps, FC } from 'react'

import { vars } from '@/styles/theme.css'

import { Spinner } from '../Spinner'
import styles from './Button.css'

interface Props extends ComponentProps<'button'> {
  color?: keyof typeof styles.button.classNames.variants.color
  size?: keyof typeof styles.button.classNames.variants.size
  loading?: boolean
}

export const Button: FC<Props> = ({
  color = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={styles.button({ color, size })}
      disabled={disabled || loading}
      {...buttonProps}
    >
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</div>
      {loading && (
        <div className={styles.loadingContainer}>
          <Spinner
            size="large"
            color={color === 'secondary' ? vars.color.text.gray : vars.color.text.white}
          />
        </div>
      )}
    </button>
  )
}
