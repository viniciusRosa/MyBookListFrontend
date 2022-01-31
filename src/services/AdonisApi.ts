import axios from 'axios';

const AdonisApi = axios.create({
  baseURL: 'http://localhost:3333/api/'
})
export default AdonisApi;