import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  background: 'none',
  border: 'none',
  borderRadius: vars.borderRadius.small,
  color: vars.color.text.black,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs,
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 0,
  position: 'relative',
  selectors: {
    '&:hover:before': {
      content: '',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: vars.color.component.overlay
    },
    '&:disabled:hover:before': {
      backgroundColor: 'transparent',
      cursor: 'default'
    }
  }
})

export default { container }
