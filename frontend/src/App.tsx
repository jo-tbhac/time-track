import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import { Dashboard } from '@/components/pages/Dashboard'
import { Setting } from '@/components/pages/Setting'
import { BrowserRouter, Navigate, Route, Routes } from '@/lib/router'

const App = () => {
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
