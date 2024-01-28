import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'https://api.escuelajs.co/',
    baseURL: 'http://localhost:4001/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;