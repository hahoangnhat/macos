import axios from 'axios'

/* TODO: 
1. Handle loading state
2. Handle access token
Refer this link: https://github.com/acmenlei/next-blog/blob/8ff4c697af9606b2e656195f9e62f6edf1044e84/src/services/config.tsx#L14
*/

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export default axiosInstance
