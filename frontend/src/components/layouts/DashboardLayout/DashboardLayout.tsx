import type { FC } from 'react'

import { Sidebar } from '@/components/model/Sidebar'
import { Outlet } from '@/lib/router'

import styles from './DashboardLayout.css'

export const DashboardLayout: FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Outlet />
    </div>
  )
}
