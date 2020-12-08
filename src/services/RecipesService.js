import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.edamam.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {

  getRecipes(search) {
    return apiClient.get(
      `search?q=${search}&app_id=33499f52&app_key=2d7131f17fc13d3c997ed4945861656b`
    )
  }
}