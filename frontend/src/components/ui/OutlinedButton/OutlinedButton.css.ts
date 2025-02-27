import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

const button = recipe({
  base: {
    alignItems: 'center',
    borderRadius: vars.borderRadius.small,
    cursor: 'pointer',
    display: 'flex',
    fontWeight: vars.fontWeight.bold,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    whiteSpace: 'nowrap',
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
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.component.box,
        border: `solid 1px ${vars.color.text.link}`,
        color: vars.color.text.link
      },
      danger: {
        backgroundColor: vars.color.component.box,
        border: `solid 1px ${vars.color.text.danger}`,
        color: vars.color.text.danger
      }
    },
    size: {
      small: {
        fontSize: vars.fontSize.textXS,
        height: 30,
        minWidth: 60,
        padding: `${vars.spacing.xxs} ${vars.spacing.m}`
      },
      medium: {
        fontSize: vars.fontSize.textS,
        height: 45,
        minWidth: 180,
        padding: `${vars.spacing.s} ${vars.spacing.m}`
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium'
  }
})

const loadingContainer = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

export default { button, loadingContainer }
