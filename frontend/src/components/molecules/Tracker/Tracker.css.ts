import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.m,
  justifyContent: 'center',
  height: '100%'
})

const buttonContainer = style({
  alignItems: 'center',
  display: 'flex',
  gap: vars.spacing.m,
  justifyContent: 'center'
})

export default { container, buttonContainer }
