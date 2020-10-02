import axios from 'axios';

//HTTP Request & Response Configuration
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// API functions
const fetchNewsList = () => {
    return axios.get(`${config.baseUrl}news/1.json`);
}

const fetchAskList = () => {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

const fetchJobsList = () => {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

export {
    fetchNewsList, fetchAskList, fetchJobsList
}