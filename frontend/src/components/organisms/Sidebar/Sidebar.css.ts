import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  background: `linear-gradient(to bottom, ${vars.color.main.primaryDark} 0%, ${vars.color.main.secondary} 100%)`,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  padding: `${vars.spacing.m} 0px`,
  width: vars.width.sideBar
})

const topSection = style({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: vars.spacing.xs,
  width: '100%'
})

const iconButton = style({
  color: vars.color.text.white,
  height: 50,
  width: 50
})

export default { container, topSection, iconButton }
