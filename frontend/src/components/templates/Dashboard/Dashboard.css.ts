import { style } from '@vanilla-extract/css'

import { basePanelStyle } from '@/components/atoms/Panel'
import { vars } from '@/styles/theme.css'

const container = style({
  backgroundColor: vars.color.component.background,
  display: 'flex',
  flex: 1,
  gap: vars.spacing.m,
  padding: vars.spacing.m,
  width: `calc(100% - ${vars.width.sideBar})`,
  '@media': {
    'screen and (max-width: 1200px)': {
      flexDirection: 'column',
      overflowY: 'auto'
    }
  }
})

const panelWrapper = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: vars.spacing.m,
  minWidth: `calc((100% - ${vars.width.sideBar})/2)`
})

const panel = style([
  basePanelStyle,
  {
    flex: 1,
    overflowY: 'auto',
    padding: vars.spacing.m
  }
])

export default { container, panelWrapper, panel }
