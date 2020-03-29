import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.1.12:8085'
});

export default api;