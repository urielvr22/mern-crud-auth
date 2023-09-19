import axios from 'axios';
//'http://127.0.0.1:4000/api'
const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true
});

export default instance