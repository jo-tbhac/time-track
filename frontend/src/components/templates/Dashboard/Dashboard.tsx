import type { FC } from 'react'

import { Panel } from '@/components/atoms/Panel'
import { Tracker } from '@/components/molecules/Tracker'
import { RecordListPanelHeader } from '@/components/organisms/RecordListPanelHeader'

import styles from './Dashboard.css'

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
