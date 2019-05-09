import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-fileserver.herokuapp.com',
});

export default api;