import {Host} from './config';
export default (uri, options = {}) => {
    const baseUrl = Host;
    let url = uri;

    if (url.indexOf('http:')===-1) {
    	url = baseUrl+uri;
    }  

    return fetch(url, options)
    .then(res => {
        if (res.status >= 400) {
            return Promise.reject(res);
        }
        return res.json();
    });
};