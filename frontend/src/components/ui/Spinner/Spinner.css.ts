import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

const spinner = recipe({
  base: {
    animation: `${spin} 1.1s infinite linear`,
    borderRadius: '50%',
    borderTop: '4px solid rgba(255, 255, 255, 0.2)',
    borderRight: '4px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '4px solid rgba(255, 255, 255, 0.2)',
    borderLeft: '4px solid #ffffff',
    height: '40px',
    transform: 'translateZ(0)',
    width: '40px',
    ':after': {
      borderRadius: '50%'
    }
  },
  variants: {
    size: {
      small: {
        borderWidth: '3px',
        height: '22px',
        width: '22px'
      },
      medium: {
        borderWidth: '4px',
        height: '40px',
        width: '40px'
      },
      large: {
        borderWidth: '6px',
        height: '60px',
        width: '60px'
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export default { spinner }
