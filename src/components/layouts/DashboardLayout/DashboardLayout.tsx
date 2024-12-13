import type { FC } from 'react'
import { Outlet } from 'react-router'

import { Sidebar } from '@/components/model/Sidebar'

import styles from './DashboardLayout.css'

export const DashboardLayout: FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Outlet />
    </div>
  )
}
