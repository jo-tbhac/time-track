import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

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

const container = recipe({
  base: {
    alignItems: 'center',
    borderRadius: vars.borderRadius.small,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
    display: 'flex',
    fontSize: vars.fontSize.textS,
    padding: `${vars.spacing.s} ${vars.spacing.m}`,
    position: 'fixed',
    bottom: 20,
    left: 20,
    animationDuration: '.2s',
    animationFillMode: 'both',
    animationName: fadeIn,
    selectors: {
      '&.fadeOut': {
        animationName: fadeOut
      }
    }
  },
  variants: {
    color: {
      alert: {
        backgroundColor: vars.color.component.backgroundDanger,
        color: vars.color.accent.danger
      },
      success: {
        backgroundColor: vars.color.component.backgroundSuccess,
        color: vars.color.accent.success
      }
    }
  }
})

export default { container }
