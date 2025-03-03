import { style } from '@vanilla-extract/css'

import { basePanelStyle } from '@/components/atoms/Panel'
import { vars } from '@/styles/theme.css'

const container = style({
  backgroundColor: vars.color.component.background,
  flex: 1,
  padding: vars.spacing.m
})

const panel = style([basePanelStyle, { height: '100%' }])

const header = style({
  marginBottom: vars.spacing.s,
  padding: `${vars.spacing.xs} ${vars.spacing.m}`
})

const content = style({
  padding: `0 ${vars.spacing.m}`
})

export default { container, panel, header, content }
