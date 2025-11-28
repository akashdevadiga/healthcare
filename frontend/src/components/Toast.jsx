import { useEffect } from 'react'

export function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(() => onClose && onClose(), 3500)
    return () => clearTimeout(t)
  }, [message, onClose])

  if (!message) return null

  const bg = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-gray-800'

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className={`${bg} text-white px-4 py-2 rounded shadow-lg`}>{message}</div>
    </div>
  )
}

export default Toast
