import { style } from '@vanilla-extract/css'

import { baseIconButtonStyle } from '@/components/ui/IconButton'
import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  background: `linear-gradient(to bottom, ${vars.color.main.primaryDark} 0%, ${vars.color.main.secondary} 100%)`,
  display: 'flex',
  flexDirection: 'column',
  padding: `${vars.spacing.m} 0px`,
  width: 60
})

const topSection = style({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: vars.spacing.xs,
  width: '100%'
})

const iconButton = style([
  baseIconButtonStyle,
  {
    color: vars.color.text.white,
    height: 50,
    width: 50
  }
])

export default { container, topSection, iconButton }
