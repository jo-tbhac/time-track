import type { FC } from 'react'
import { useMemo, useState } from 'react'

import { Panel } from '@/components/ui/Panel'
import { Tab, TabContainer } from '@/components/ui/Tab'

import styles from './Setting.css'
import { UpdateEmailForm } from './UpdateEmailForm'

const TAB_NAMES = {
  jobs: 'jobs',
  account: 'account'
} as const

type TabName = (typeof TAB_NAMES)[keyof typeof TAB_NAMES]

export const Setting: FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>(TAB_NAMES.jobs)

  const TabContent = useMemo(() => {
    switch (selectedTab) {
      case TAB_NAMES.account:
        return <UpdateEmailForm />
      case TAB_NAMES.jobs:
        return <></>
    }
  }, [selectedTab])

  const handleClickJobsTab = () => {
    setSelectedTab(TAB_NAMES.jobs)
  }

  const handleClickAccountTab = () => {
    setSelectedTab(TAB_NAMES.account)
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
            <Tab
              text="アカウント"
              active={selectedTab === TAB_NAMES.account}
              onClick={handleClickAccountTab}
            />
          </TabContainer>
        </div>
        <div className={styles.content}>{TabContent}</div>
      </Panel>
    </div>
  )
}
