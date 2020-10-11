import axios from 'axios';

//HTTP Request & Response Configuration
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// API functions

const fetchList = (pageName) => {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

const fetchUserInfo = (id) => {
    return axios.get(`${config.baseUrl}user/${id}.json`);
}

const fetchCommentItem = (id) => {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchUserInfo, fetchCommentItem, fetchList
}