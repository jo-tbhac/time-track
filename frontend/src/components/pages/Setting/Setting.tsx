import type { FC } from 'react'
import { useMemo, useState } from 'react'

import { Panel } from '@/components/ui/Panel'
import { Tab, TabContainer } from '@/components/ui/Tab'

import { JobList } from './JobList'
import styles from './Setting.css'

const TAB_NAMES = {
  jobs: 'jobs'
} as const

type TabName = (typeof TAB_NAMES)[keyof typeof TAB_NAMES]

export const Setting: FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>(TAB_NAMES.jobs)

  const TabContent = useMemo(() => {
    switch (selectedTab) {
      case TAB_NAMES.jobs:
        return <JobList />
    }
  }, [selectedTab])

  const handleClickJobsTab = () => {
    setSelectedTab(TAB_NAMES.jobs)
  }

  return (
    <div className={styles.container}>
      <Panel className={styles.panel}>
        <div className={styles.header}>
          <TabContainer>
            <Tab
              text="仕事データ"
              active={selectedTab === TAB_NAMES.jobs}
              onClick={handleClickJobsTab}
            />
          </TabContainer>
        </div>
        <div className={styles.content}>{TabContent}</div>
      </Panel>
    </div>
  )
}
