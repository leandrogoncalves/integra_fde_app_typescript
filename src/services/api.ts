import axios from 'axios';
import host from '../config/auth';

const api = axios.create({
  baseURL: host
});

export default api;
