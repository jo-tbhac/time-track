import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

const dateContainer = style({
  marginBottom: vars.spacing.xxs
})

const timeContainer = style({
  alignItems: 'baseline',
  display: 'flex',
  gap: vars.spacing.xxs
})

const time = style({
  fontSize: '2.5rem',
  fontWeight: vars.fontWeight.bold
})

export default { container, dateContainer, timeContainer, time }
