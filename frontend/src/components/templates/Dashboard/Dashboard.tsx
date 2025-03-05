import type { FC } from 'react'

import { Panel } from '@/components/atoms/Panel'
import { Tracker } from '@/components/molecules/Tracker'
import { RecordList } from '@/components/organisms/RecordList'
import { RecordListPanelHeader } from '@/components/organisms/RecordListPanelHeader'

import styles from './Dashboard.css'

export const Dashboard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panelWrapper}>
        <Panel className={styles.panel}>
          <Tracker />
        </Panel>
        <Panel className={styles.panel}>Panel 2</Panel>
      </div>
      <div className={styles.panelWrapper}>
        <Panel className={styles.panel}>
          <RecordListPanelHeader />
          <RecordList />
        </Panel>
      </div>
    </div>
  )
}
