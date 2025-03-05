import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const tableContainer = style({
  width: '100%'
})

const tableCell = style({
  padding: `${vars.spacing.xs} ${vars.spacing.xs}`
})

export default { tableContainer, tableCell }
