import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

const container = style({
  display: 'grid',
  gap: vars.spacing.m,
  gridTemplateAreas: `
    'date date date name name name'
    'startTime startTime endTime endTime workTime workTime'
    'note note note note note note'
  `,
  gridTemplateColumns: 'repeat(6, 1fr)',
  maxWidth: 800
})

const formItemBase = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs
})

const dateForm = style([
  formItemBase,
  {
    gridArea: 'date'
  }
])

const nameForm = style([
  formItemBase,
  {
    gridArea: 'name'
  }
])

const startTimeForm = style([
  formItemBase,
  {
    gridArea: 'startTime'
  }
])

const endTimeForm = style([
  formItemBase,
  {
    gridArea: 'endTime'
  }
])

const workTimeForm = style([
  formItemBase,
  {
    gridArea: 'workTime'
  }
])

const noteForm = style([
  formItemBase,
  {
    gridArea: 'note'
  }
])

export default { container, dateForm, nameForm, startTimeForm, endTimeForm, workTimeForm, noteForm }
