import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://heady-bikes-production.up.railway.app/api/v1/',
});
