import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
})
export default instance
/* https://newsapi.org/v2/everything?q=Apple&from=2021-08-23&sortBy=popularity&apiKey=d8c57ddb550940de83ebef3b893baa3d */
