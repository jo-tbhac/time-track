import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  borderBottom: `solid 2px ${vars.color.component.border}`,
  display: 'flex'
})

const tabWrapper = style({
  position: 'relative'
})

const tab = style({
  background: 'none',
  backgroundColor: vars.color.component.box,
  border: 'none',
  borderTopLeftRadius: vars.borderRadius.small,
  borderTopRightRadius: vars.borderRadius.small,
  color: vars.color.text.gray,
  cursor: 'pointer',
  fontSize: vars.fontSize.textS,
  fontWeight: vars.fontWeight.regular,
  minWidth: 150,
  padding: `${vars.spacing.xs} ${vars.spacing.s}`,
  ':disabled': {
    color: vars.color.text.black,
    cursor: 'default',
    fontWeight: vars.fontWeight.bold
  },
  ':hover': {
    backgroundColor: vars.color.component.overlay
  },
  selectors: {
    '&:disabled:hover': {
      backgroundColor: vars.color.component.box
    }
  }
})

const border = style({
  backgroundColor: vars.color.main.primary,
  height: 2,
  position: 'absolute',
  bottom: -2,
  left: 0,
  right: 0
})

export default { container, tabWrapper, tab, border }
