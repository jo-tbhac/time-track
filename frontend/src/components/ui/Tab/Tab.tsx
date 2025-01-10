import type { ComponentProps, FC, ReactNode } from 'react'

import styles from './Tab.css'

interface TabContainerProps {
  children: ReactNode
}

interface TabProps extends Pick<ComponentProps<'button'>, 'onClick' | 'className'> {
  text: string
  active?: boolean
}

export const TabContainer: FC<TabContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export const Tab: FC<TabProps> = ({ text, active = false, className, onClick }) => {
  const classNames = [styles.tab, className].join(' ')

  return (
    <div className={styles.tabWrapper}>
      <button type="button" disabled={active} className={classNames} onClick={onClick}>
        {text}
      </button>
      {active && <div className={styles.border} />}
    </div>
  )
}
