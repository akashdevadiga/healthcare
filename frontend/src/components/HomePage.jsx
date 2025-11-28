import { Link } from 'react-router-dom'
import { Heart, Users, Settings } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="text-indigo-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">HealthCare</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">HealthCare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted platform for managing health records and connecting with healthcare professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Heart className="text-indigo-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health Records</h3>
              <p className="text-gray-600">
                Securely store and manage your medical records in one place
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Users className="text-indigo-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Connect with experienced healthcare professionals anytime
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Settings className="text-indigo-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Simple interface to manage appointments and prescriptions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-indigo-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Join thousands of users managing their health effectively</p>
          <Link
            to="/login"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-block transition"
          >
            Sign In Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 HealthCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
