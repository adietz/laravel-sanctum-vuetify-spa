import axios from 'axios';

axios.defaults.baseURL = '/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
export default {
    authenticateUser (formData) {
        return axios.get('/sanctum/csrf-cookie', {baseURL: '/'}).then(response => {
            return axios.post('/login', formData, {baseURL: '/'}).then(response => {
                return response;
            }).catch(error => console.error(error)); // credentials didn't match
        });
    },
    registerUser (formData) {
        return axios.post('/register', formData, {baseURL: '/'}).then(response => {
            return response;
        }).catch(error => console.error(error)); // account couldn't be created
    },
    deauthenticateUser () {
        return axios.post('/logout', {}, {baseURL: '/'}).then(response => {
            return response;
        });
    },
    fetchUser () {
        return axios.get('/user').then(response => {
            return response;
        });
    }

};
