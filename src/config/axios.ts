import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.60.152:8080/api/v1/',
});
