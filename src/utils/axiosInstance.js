import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 15000,
    timeoutErrorMessage: 'Timeout'
})

export default instance;