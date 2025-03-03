import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  position: 'relative'
})

const calendarTrigger = style({
  background: 'none',
  border: `solid 1px ${vars.color.component.border}`,
  borderRadius: vars.borderRadius.small,
  color: vars.color.text.black,
  cursor: 'pointer',
  fontSize: vars.fontSize.textS,
  lineHeight: '1.4',
  minHeight: 38,
  padding: `${vars.spacing.xs} ${vars.spacing.s}`,
  textAlign: 'left',
  width: '100%'
})

const calendar = style({
  fontFamily: '"Noto Sans JP Variable", sans-serif',
  position: 'absolute',
  selectors: {
    '&.react-calendar': {
      borderColor: vars.color.component.border
    }
  }
})

export default { container, calendarTrigger, calendar }
