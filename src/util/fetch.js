import {Host} from './config';
export default (uri, options = {}) => {
    const baseUrl = Host;
    const url = baseUrl+uri;
    

    return fetch(url, options)
    .then(res => {
        if (res.status >= 400) {
            return Promise.reject(res);
        }
        return res.json();
    });
};