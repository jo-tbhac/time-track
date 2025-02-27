import { style } from '@vanilla-extract/css'

import { basePanelStyle } from '@/components/ui/Panel'
import { vars } from '@/styles/theme.css'

const container = style({
  backgroundColor: vars.color.component.background,
  display: 'grid',
  flex: 1,
  gap: vars.spacing.m,
  gridTemplateAreas: `
    'fistPanel thirdPanel'
    'secondPanel thirdPanel'
  `,
  padding: vars.spacing.m
})

const firstPanel = style([
  basePanelStyle,
  {
    gridArea: 'fistPanel'
  }
])

const secondPanel = style([
  basePanelStyle,
  {
    gridArea: 'secondPanel'
  }
])

const thirdPanel = style([
  basePanelStyle,
  {
    gridArea: 'thirdPanel',
    padding: vars.spacing.m
  }
])

export default { container, firstPanel, secondPanel, thirdPanel }
