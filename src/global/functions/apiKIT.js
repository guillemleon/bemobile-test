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
        })
}

export function post(endpoint, body, callback) {
    axiosInst.post(endpoint, body)
        .then(res => {
            console.log(res)
            callback(res)
        })
        .catch(err => {
            console.log(err)
        })
}