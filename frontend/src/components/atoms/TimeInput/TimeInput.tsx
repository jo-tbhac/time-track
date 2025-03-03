import type { FC } from 'react'

import { TextInput, type TextInputProps } from '../TextInput'

type Props = Omit<TextInputProps, 'onChange' | 'value'> & {
  value: string
  onChange: (newValue: string) => void
}

export const TimeInput: FC<Props> = ({ value, onChange, ...props }) => {
  const handleChangeValue: TextInputProps['onChange'] = (event) => {
    const newValue = event.target.value
    if (!/^\d{0,4}$/.test(newValue)) {
      return
    }
    onChange(newValue)
  }

  const handleFocus = () => {
    onChange(value.replace(':', ''))
  }

  const handleBlur = () => {
    if (!/^\d{1,4}$/.test(value)) {
      onChange('')
      return
    }

    const paddedValue = value.padStart(4, '0')
    const hour = Math.min(Number(paddedValue.substring(0, 2)), 23)
    const minute = Math.min(Number(paddedValue.substring(2, 4)), 59)
    onChange(`${hour}:${String(minute).padStart(2, '0')}`)
  }

  return (
    <TextInput
      {...props}
      type="text"
      value={value}
      onChange={handleChangeValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}
