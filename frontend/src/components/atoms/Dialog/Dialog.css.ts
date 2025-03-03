import { style } from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const fadeOut = keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
})

const container = style({
  backgroundColor: vars.color.component.box,
  borderRadius: vars.borderRadius.medium,
  minWidth: 600
})

const overlay = style({
  alignItems: 'center',
  backgroundColor: vars.color.component.scrim,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  animationDuration: '.2s',
  animationFillMode: 'both',
  animationName: fadeIn,
  selectors: {
    '&.fadeOut': {
      animationName: fadeOut
    }
  }
})

const header = style({
  padding: `${vars.spacing.m} ${vars.spacing.l}`
})

const content = style({
  padding: `0 ${vars.spacing.l}`
})

const footer = style({
  alignItems: 'center',
  display: 'flex',
  gap: vars.spacing.xs,
  justifyContent: 'flex-end',
  padding: `${vars.spacing.m} ${vars.spacing.l}`
})

export default { container, overlay, header, content, footer }
