import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import api from '@/lib/api'
import Toast from './Toast'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({ email: '', password: '' })
  const [toast, setToast] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Clear errors
      setError('')
      setFieldErrors({ email: '', password: '' })

      // Client validation
      const errs = {}
      if (!email) errs.email = 'Email is required'
      else if (!email.includes('@')) errs.email = 'Enter a valid email'
      if (!password) errs.password = 'Password is required'

      if (Object.keys(errs).length) {
        setFieldErrors(errs)
        return
      }

      // Call the API wrapper
      const res = await api.post('/auth/login', { email, password })

      // Example response handling - adapt to your backend
      if (res?.data?.success) {
        const token = res.data.token || 'demo-token'
        localStorage.setItem('token', token)
        setToast('Login successful')
        // small delay to show toast then redirect
        setTimeout(() => navigate('/dashboard'), 800)
      } else {
        setError(res?.data?.message || 'Invalid credentials')
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || 'An error occurred. Please try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Toast message={toast} type="success" onClose={() => setToast('')} />
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
              {fieldErrors.email && (
                <p id="email-error" className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!fieldErrors.password}
                  aria-describedby={fieldErrors.password ? 'password-error' : undefined}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {fieldErrors.password && (
                <p id="password-error" className="text-sm text-red-600 mt-1">{fieldErrors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}