import axios from 'axios';

const AdonisApi = axios.create({
  baseURL: 'https://mybooklisttestbackend.herokuapp.com/api/'
})
export default AdonisApi;