import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/styles/theme.css'

const button = recipe({
  base: {
    alignItems: 'center',
    background: 'none',
    border: 'none',
    borderRadius: vars.borderRadius.small,
    cursor: 'pointer',
    display: 'flex',
    fontSize: vars.fontSize.textS,
    fontWeight: vars.fontWeight.bold,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: `${vars.spacing.xs} ${vars.spacing.s}`,
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
      '&:disabled': {
        opacity: 0.6
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
        color: vars.color.text.link
      },
      danger: {
        color: vars.color.text.danger
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

export default { button }
