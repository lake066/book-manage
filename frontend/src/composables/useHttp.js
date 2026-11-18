import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE

export function useHttp() {
  const request = async (method, url, data = null) => {
    const config = { method, url: `${baseUrl}${url}` }
    if (method === 'get') {
      config.params = data
    } else {
      config.data = data
    }
    const res = await axios(config)
    return res.data
  }
  return { request }
}
