import { Dashboard } from '@/components/pages/Dashboard'
import { Setting } from '@/components/pages/Setting'
import { SignIn } from '@/components/pages/SignIn'
import { BrowserRouter, Route, Routes } from '@/router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
