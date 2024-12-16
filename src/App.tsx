import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import { Dashboard } from '@/components/pages/Dashboard'
import { Setting } from '@/components/pages/Setting'
import { SignIn } from '@/components/pages/SignIn'
import { BrowserRouter, Route, Routes } from '@/lib/router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
