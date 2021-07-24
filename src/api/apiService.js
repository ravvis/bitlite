import axios from 'axios'

const getBaseUrl = ()=> {
  return "https://api.bitbucket.org/2.0/"
}

const api = axios.create({
  baseURL: `${getBaseUrl()}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const Axios = {
  ...axios,
  get: async (url, options) => {
    return api
      .get(url, options)
      .then(response => response)
      .catch(() => {
        // serverLogger(null, null, err);
        return { data: null }
      })
  },
  post: async (url, payload = {}, options = {}) => {
    return api
      .post(url, payload, {
        ...options
      })
      .then(response => response)
      .catch(() => {
        // serverLogger(null, null, err);
        return { data: null }
      })
  },
  put: async (url, payload = {}, options = {}) => {
    return api
      .put(url, payload, {
        ...options
      })
      .then(response => response)
      .catch(() => {
        // serverLogger(null, null, err);
        return { data: null }
      })
  },
  delete: async (url, options = {}) => {
    return axios
      .delete(url, {
        ...options
      })
      .then(response => response)
      .catch(() => {
        // serverLogger(null, null, err);
        return { data: null }
      })
  },
}

export default Axios
