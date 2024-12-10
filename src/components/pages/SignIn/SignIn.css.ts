import { style } from '@vanilla-extract/css'

import { basePanelStyle } from '@/components/ui/Panel'
import { vars } from '@/styles/theme.css'

const container = style({
  alignItems: 'center',
  background: `linear-gradient(to bottom, ${vars.color.main.primary} 0%, ${vars.color.main.tertiary} 100%)`,
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  width: '100%'
})

const panel = style([
  basePanelStyle,
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: `${vars.spacing.xl} 60px`,
    width: 450
  }
])

const logo = style({
  marginBottom: vars.spacing.l,
  width: 230
})

const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.l
})

const formSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs,
  width: 300
})

export default { container, panel, logo, formWrapper, formSection }
