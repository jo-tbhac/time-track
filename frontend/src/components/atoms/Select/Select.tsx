import type { KeyboardEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { AngleDownIcon } from '@/lib/icons'

import { Typography } from '../Typography'
import styles from './Select.css'

interface Option<T extends string | number> {
  label: string
  value: T
}

interface Props<T extends string | number> {
  options: Array<Option<T>>
  value: T
  onChange: (newValue: T) => void
}

export const Select = <T extends string | number>({ options, value, onChange }: Props<T>) => {
  const selectBoxRef = useRef<HTMLButtonElement>(null)
  const optionsContainerRef = useRef<HTMLDivElement>(null)

  const [optionsShown, setOptionsShown] = useState(false)

  useEffect(() => {
    if (!optionsShown) {
      return
    }

    const closeOptions = (event: MouseEvent) => {
      if (event.target instanceof Node && selectBoxRef.current?.contains(event.target)) {
        return
      }
      if (event.target instanceof Node && optionsContainerRef.current?.contains(event.target)) {
        return
      }
      setOptionsShown(false)
    }
    document.addEventListener('mousedown', closeOptions)

    return () => {
      document.removeEventListener('mousedown', closeOptions)
    }
  }, [optionsShown])

  const selectedLabel = useMemo(() => {
    return options.find((option) => option.value === value)?.label ?? ''
  }, [options, value])

  const handleClickSelectBox = () => {
    setOptionsShown((currentState) => !currentState)
  }

  return (
    <div className={styles.container}>
      <button
        ref={selectBoxRef}
        type="button"
        className={styles.selectBox}
        onClick={handleClickSelectBox}
      >
        <div className={styles.selectBoxLabel}>
          <Typography fontSize="textS">{selectedLabel}</Typography>
        </div>
        <AngleDownIcon />
      </button>
      {optionsShown && (
        <div ref={optionsContainerRef} className={styles.optionsContainer}>
          {options.map((option) => (
            <div
              key={option.value}
              role="menuitem"
              tabIndex={0}
              className={styles.option}
              onClick={() => {
                onChange(option.value)
                setOptionsShown(false)
              }}
              onKeyDown={(event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                  onChange(option.value)
                  setOptionsShown(false)
                }
              }}
            >
              <Typography fontSize="textS">{option.label}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
