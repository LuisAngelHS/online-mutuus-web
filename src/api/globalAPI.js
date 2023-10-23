import axios from 'axios';
// import { getEnvVariables } from '../helpers';

// const {VITE_API_URL} = getEnvVariables();


const API = axios.create({
    baseURL:'http://4.tcp.ngrok.io:13058/api/rest'
});

export default API;