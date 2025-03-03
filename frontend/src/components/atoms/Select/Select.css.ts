import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  position: 'relative'
})

const selectBox = style({
  alignItems: 'center',
  background: 'none',
  border: `solid 1px ${vars.color.component.border}`,
  borderRadius: vars.borderRadius.small,
  color: vars.color.text.black,
  cursor: 'pointer',
  display: 'flex',
  fontSize: vars.fontSize.textS,
  lineHeight: '1.4',
  minHeight: 38,
  padding: `${vars.spacing.xs} ${vars.spacing.s}`,
  width: '100%'
})

const selectBoxLabel = style({
  flex: 1,
  textAlign: 'left'
})

const optionsContainer = style({
  backgroundColor: vars.color.component.box,
  border: `solid 1px ${vars.color.component.border}`,
  borderBottomLeftRadius: vars.borderRadius.small,
  borderBottomRightRadius: vars.borderRadius.small,
  position: 'absolute',
  left: 0,
  width: '100%'
})

const option = style({
  cursor: 'pointer',
  padding: `${vars.spacing.xs} ${vars.spacing.s}`,
  ':hover': {
    backgroundColor: vars.color.component.overlay
  }
})

export default { container, selectBox, selectBoxLabel, optionsContainer, option }
