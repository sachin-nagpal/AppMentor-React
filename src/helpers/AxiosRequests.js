import axios from 'axios';


const AxiosRequest = () => {
    const token = localStorage.getItem('userId');
    const defaultOptions = {
        headers: {
            token: token ? `${token}` : '',
        },
    };

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    };
};

// const request = client('MY SECRET TOKEN');

// request.get(PAGES_URL);

export default AxiosRequest;