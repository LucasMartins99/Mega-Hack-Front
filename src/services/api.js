import axios from 'axios';

const api = axios.create({
  baseURL: 'http://megahackdigital-com.umbler.net:3000',
});
export default api;
