import axios from 'axios';
// import { getEnvVariables } from '../helpers';

// const {VITE_API_URL} = getEnvVariables();


const API = axios.create({
    baseURL:'https://af31659dd15e-8433454084604420537.ngrok-free.app/v1/graphql'
});

export default API;