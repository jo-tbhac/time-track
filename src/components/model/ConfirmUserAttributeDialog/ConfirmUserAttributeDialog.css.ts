import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs,
  marginBottom: vars.spacing.s
})

const alert = style({
  marginBottom: vars.spacing.m
})

export default { content, alert }
