import { Dashboard } from '@/components/templates/Dashboard'
import { DashboardLayout } from '@/components/templates/DashboardLayout'
import { Setting } from '@/components/templates/Setting'
import { BrowserRouter, Navigate, Route, Routes } from '@/lib/router'
import { useSubscribeWindowResize } from '@/runtime/events/resizeWindow'

const App = () => {
  useSubscribeWindowResize()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
