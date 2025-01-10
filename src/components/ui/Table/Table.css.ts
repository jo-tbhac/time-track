import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const tableContainer = style({
  border: `solid 1px ${vars.color.component.border}`,
  borderRadius: vars.borderRadius.small,
  width: 'fit-content'
})

const table = style({
  borderCollapse: 'collapse'
})

const tableHead = style({
  borderBottom: `solid 1px ${vars.color.component.border}`,
  color: vars.color.text.gray,
  fontWeight: vars.fontWeight.bold
})

const tableBody = style({
  color: vars.color.text.black,
  fontWeight: vars.fontWeight.regular
})

const tableRow = style({
  borderBottom: `solid 1px ${vars.color.component.border}`,
  selectors: {
    '&:last-of-type': {
      borderBottom: 'none'
    }
  }
})

const tableCell = style({
  fontSize: vars.fontSize.textS,
  padding: `${vars.spacing.xs} ${vars.spacing.m}`
})

export default { tableContainer, table, tableHead, tableBody, tableRow, tableCell }
