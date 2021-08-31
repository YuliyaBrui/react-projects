import axios from 'axios'

export const API_KEY = 'd8c57ddb550940de83ebef3b893baa3d'
// export const API_KEY = '6d9116e0fbf4441fa7ea838fe4dffd11'
const instance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 7000,
})
export default instance
