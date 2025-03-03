import type { ComponentProps, FC } from 'react'

import { vars } from '@/styles/theme.css'

import { Spinner } from '../Spinner'
import styles from './OutlinedButton.css'

interface Props extends ComponentProps<'button'> {
  color?: keyof typeof styles.button.classNames.variants.color
  size?: keyof typeof styles.button.classNames.variants.size
  loading?: boolean
}

export const OutlinedButton: FC<Props> = ({
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
            size="small"
            color={color === 'primary' ? vars.color.text.link : vars.color.text.danger}
          />
        </div>
      )}
    </button>
  )
}
