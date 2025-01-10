import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  maxWidth: 400
})

const inputField = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs,
  marginBottom: vars.spacing.s
})

export default { container, inputField }
