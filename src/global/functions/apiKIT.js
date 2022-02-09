import axios from 'axios';

const axiosInst = axios.create({
    baseURL: 'https://front-test-api.herokuapp.com'
})

export function get(endpoint, callback) {
    axiosInst.get(endpoint)
        .then(res => {
            return callback(res)
        })
        .catch((err) => {
            console.log(err)
            throw err;
        })
}

export function post(endpoint, callback, headers) {
    axiosInst.post(endpoint, headers)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
            throw err;
        })
}