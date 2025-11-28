import { useState } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'

const API_URL = 'http://localhost:4000/users'

export default function AddStaffModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    role_name: '',
    contact_number: '',
    shift_preference: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.role_name) newErrors.role_name = 'Role is required'
    if (!formData.contact_number.trim()) newErrors.contact_number = 'Contact is required'
    if (!/^\+?[0-9\s\-()]+$/.test(formData.contact_number)) {
      newErrors.contact_number = 'Invalid phone number'
    }
    if (!formData.shift_preference) newErrors.shift_preference = 'Shift is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setApiError(null)

    if (!validate()) return

    setLoading(true)
    try {
      const res = await axios.post(API_URL, formData)
      setFormData({ name: '', role_name: '', contact_number: '', shift_preference: '' })
      onSuccess && onSuccess(res.data)
      onClose()
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || 'Failed to add staff'
      setApiError(msg)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Add Staff</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
              {apiError}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Alice"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoFocus
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role *</label>
            <select
              name="role_name"
              value={formData.role_name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select role</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="technician">Technician</option>
            </select>
            {errors.role_name && <p className="text-red-600 text-sm mt-1">{errors.role_name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number *</label>
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              placeholder="e.g., +1234567890"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.contact_number && <p className="text-red-600 text-sm mt-1">{errors.contact_number}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Shift Preference *</label>
            <select
              name="shift_preference"
              value={formData.shift_preference}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select shift</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
            {errors.shift_preference && <p className="text-red-600 text-sm mt-1">{errors.shift_preference}</p>}
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border px-3 py-2 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 disabled:bg-gray-400"
            >
              {loading ? 'Adding...' : 'Add Staff'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
