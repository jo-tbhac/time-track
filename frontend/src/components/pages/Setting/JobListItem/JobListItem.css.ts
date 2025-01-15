import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const tableRow = style({
  height: 55
})

const actions = style({
  alignItems: 'center',
  display: 'flex',
  gap: vars.spacing.xxs,
  justifyContent: 'center'
})

export default { tableRow, actions }
