import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const text = style({
  color: vars.color.text.black,
  fontSize: vars.fontSize.textM,
  fontWeight: vars.fontWeight.regular
})

export default { text }
