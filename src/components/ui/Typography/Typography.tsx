import type { ComponentProps, FC } from 'react'

import { vars } from '@/styles/theme.css'

import styles from './Typography.css'

interface Props extends ComponentProps<'span'> {
  bold?: boolean
  color?: keyof typeof vars.color.text
  fontSize?: keyof typeof vars.fontSize
}

export const Typography: FC<Props> = ({
  bold = false,
  color = 'black',
  fontSize = 'textM',
  ...spanProps
}) => {
  return (
    <span
      className={styles.text}
      style={{
        color: vars.color.text[color],
        fontSize: vars.fontSize[fontSize],
        fontWeight: bold ? vars.fontWeight.bold : vars.fontWeight.regular
      }}
      {...spanProps}
    />
  )
}
