import axios from 'axios';

const api = axios.create({
  baseURL: 'http://megahackdigital.com:3000',
});
export default api;
