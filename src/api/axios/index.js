import axios from 'axios'

let AUTH_TOKEN = ''

export const setToken = (token) => (AUTH_TOKEN = token || '')

axios.defaults.baseURL = 'https://teamcnapi.coros.com/'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

axios.interceptors.response.use(
  function (response) {
    if (response.data.result !== '0000') {
      return Promise.reject(response.data)
    }
    return response.data.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const POST = (url, params) => {
  console.log(111)
  return axios.post(url, params)
}

export const GET = (url, params) => {
  return axios.get(url, params)
}

export default axios
