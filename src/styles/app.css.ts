import { globalStyle } from '@vanilla-extract/css'

import { vars } from './theme.css'

globalStyle('html, body', {
  color: vars.color.text.black,
  fontFamily: '"Noto Sans JP Variable", sans-serif',
  margin: 0
})
