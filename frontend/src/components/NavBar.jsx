import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-indigo-600 font-bold text-lg">
              HealthCare
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            <Link to="/login" className="bg-indigo-600 text-white px-3 py-1.5 rounded-md">Login</Link>
            <div className="ml-3 relative">
              <button aria-label="User menu" className="flex items-center gap-2 text-gray-700">
                <User size={18} /> <span className="sr-only">User menu</span>
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/dashboard" className="block px-2 py-2 rounded hover:bg-gray-50">Dashboard</Link>
            <Link to="/about" className="block px-2 py-2 rounded hover:bg-gray-50">About</Link>
            <Link to="/contact" className="block px-2 py-2 rounded hover:bg-gray-50">Contact</Link>
            <Link to="/login" className="block px-2 py-2 rounded bg-indigo-600 text-white text-center">Login</Link>
          </div>
        </div>
      )}
    </header>
  )
}
