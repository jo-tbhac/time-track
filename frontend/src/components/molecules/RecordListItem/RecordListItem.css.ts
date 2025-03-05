import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({})

const tableCell = style({
  padding: 0
})

const tableCellContent = style({
  padding: `${vars.spacing.xxs} ${vars.spacing.xs}`
})

const textInput = style({
  width: '100%'
})

const iconButton = style({
  color: vars.color.text.gray,
  height: 30,
  width: 30
})

export default { container, tableCell, tableCellContent, textInput, iconButton }
