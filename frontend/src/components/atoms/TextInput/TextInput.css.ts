import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  border: `solid 1px ${vars.color.component.border}`,
  borderRadius: vars.borderRadius.small,
  color: vars.color.text.black,
  fontSize: vars.fontSize.textS,
  lineHeight: '1.4',
  padding: `${vars.spacing.xs} ${vars.spacing.s}`
})

export default { container }
