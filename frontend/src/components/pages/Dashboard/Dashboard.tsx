import type { FC } from 'react'

import { Panel } from '@/components/ui/Panel'

import styles from './Dashboard.css'
import { RecordListPanelHeader } from './RecordListPanelHeader'
import { Tracker } from './Tracker'

export const Dashboard: FC = () => {
  return (
    <div className={styles.container}>
      <Panel className={styles.firstPanel}>
        <Tracker />
      </Panel>
      <Panel className={styles.secondPanel}>Panel 2</Panel>
      <Panel className={styles.thirdPanel}>
        <RecordListPanelHeader />
      </Panel>
    </div>
  )
}
