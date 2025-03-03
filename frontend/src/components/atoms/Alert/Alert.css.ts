import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  backgroundColor: vars.color.component.backgroundDanger,
  borderRadius: vars.borderRadius.small,
  display: 'flex',
  padding: `${vars.spacing.xs} ${vars.spacing.s}`
})

export default { container }
