import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  background: `linear-gradient(to bottom, ${vars.color.main.primary} 0%, ${vars.color.main.tertiary} 100%)`,
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  height: 70,
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 4,
  position: 'relative',
  width: 70,
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
    '&:disabled': {
      background: vars.color.component.border
    },
    '&:disabled:hover:before': {
      backgroundColor: 'transparent',
      cursor: 'default'
    }
  }
})

const insideContainer = style({
  alignItems: 'center',
  backgroundColor: vars.color.component.box,
  borderRadius: '50%',
  display: 'flex',
  flex: 1,
  height: '100%',
  justifyContent: 'center'
})

export default { container, insideContainer }
