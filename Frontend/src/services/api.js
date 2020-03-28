import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:8085',
});

api.interceptors.response.use(res => (res), err => {
    if(!err.response){
        localStorage.clear();

        window.location.replace("/500");
        return Promise.reject(null);
    }
});

export default api;