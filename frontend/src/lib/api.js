import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Optional: response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can extract and normalize error messages here
    return Promise.reject(error)
  }
)

export default api
