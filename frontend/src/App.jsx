import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { HomePage } from './components/HomePage'
import { Dashboard } from './components/Dashboard'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import './App.css'

function Layout() {
  // Layout used for routes that should show the NavBar
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages without the NavBar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Routes wrapped with Layout will render the NavBar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
