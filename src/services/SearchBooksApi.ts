import axios from 'axios';

const searchBooksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=dq='
})
export default searchBooksApi;