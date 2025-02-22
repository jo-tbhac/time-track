import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import type { CalendarProps } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { format } from '@/lib/date'

import styles from './DatePicker.css'

interface Props {
  id?: string
  value: Date
  handleChangeDate: (newDate: Date) => void
}

export const DatePicker: FC<Props> = ({ id, value, handleChangeDate }) => {
  const calendarTriggerRef = useRef<HTMLButtonElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const closeDatePicker = (event: MouseEvent) => {
      if (event.target instanceof Node && calendarTriggerRef.current?.contains(event.target)) {
        return
      }
      if (event.target instanceof Node && calendarRef.current?.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.addEventListener('mousedown', closeDatePicker)

    return () => {
      document.removeEventListener('mousedown', closeDatePicker)
    }
  }, [open])

  const handleClickCalendarTrigger = () => {
    setOpen((currentState) => !currentState)
  }

  const handleClickDay: CalendarProps['onClickDay'] = (newDate) => {
    handleChangeDate(newDate)
    setOpen(false)
  }

  return (
    <div id={id} className={styles.container}>
      <button
        type="button"
        ref={calendarTriggerRef}
        className={styles.calendarTrigger}
        onClick={handleClickCalendarTrigger}
      >
        {format(value, 'yyyy年M月d日 E')}
      </button>
      {open && (
        <Calendar
          inputRef={calendarRef}
          className={styles.calendar}
          value={value}
          onClickDay={handleClickDay}
          maxDetail="month"
          minDetail="year"
          next2Label={null}
          prev2Label={null}
        />
      )}
    </div>
  )
}
