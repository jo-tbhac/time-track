import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  display: 'flex',
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.m
})

const title = style({
  flex: 1
})

export default { container, title }
