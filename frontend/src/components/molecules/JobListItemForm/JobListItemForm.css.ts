import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const tableRow = style({
  height: 55
})

const inputCell = style({
  paddingLeft: vars.spacing.xxs,
  paddingRight: vars.spacing.xxs
})

const nameInput = style({
  width: 250
})

const hourlyWageInput = style({
  width: 90
})

const actions = style({
  alignItems: 'center',
  display: 'flex',
  gap: vars.spacing.xxs,
  justifyContent: 'center'
})

export default { tableRow, inputCell, nameInput, hourlyWageInput, actions }
