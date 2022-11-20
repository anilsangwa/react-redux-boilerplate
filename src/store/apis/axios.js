import axios from 'axios'
import { BASE_URL } from '.'
import { showErrorToast } from '../../functions/Toasts'
// import cors from "cors"

// cors.apply()
const instance = axios.create({
  BASE_URL: BASE_URL,
  timeout: 20000,
  // withCredentials: true,
  // credentials: 'same-origin'
})

instance.interceptors.request.use(
  (reqConfig) => {
    let authToken = localStorage.getItem('authToken')
    if (authToken) {
      reqConfig.headers.common['Authorization'] = 'Bearer ' + authToken
    }
    return reqConfig
  },
  (err) => {}
)
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    if (err && err.response && err.response.status === 403) {
      showErrorToast('Unathorized access!')
    }

    return Promise.reject(err)
  }
)

export default instance
