import axios from 'axios';

const baseURL = axios.create({
    baseURL: 'http://api.tvmaze.com/'
});

export { baseURL };