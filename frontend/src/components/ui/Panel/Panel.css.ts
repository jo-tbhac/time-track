import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  backgroundColor: vars.color.component.box,
  borderRadius: vars.borderRadius.medium
})

export default { container }
