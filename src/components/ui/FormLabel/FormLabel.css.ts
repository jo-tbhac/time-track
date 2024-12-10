import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const label = style({
  color: vars.color.text.gray,
  fontSize: vars.fontSize.textXS,
  fontWeight: vars.fontWeight.bold
})

export default { label }
