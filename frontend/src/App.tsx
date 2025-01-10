import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import { ProtectedPage } from '@/components/layouts/ProtectedPage'
import { Dashboard } from '@/components/pages/Dashboard'
import { RegisterNewPassword } from '@/components/pages/RegisterNewPassword'
import { Setting } from '@/components/pages/Setting'
import { SignIn } from '@/components/pages/SignIn'
import { BrowserRouter, Navigate, Route, Routes } from '@/lib/router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage />}>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/new-password" element={<RegisterNewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
