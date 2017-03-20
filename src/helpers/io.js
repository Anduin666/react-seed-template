import axios from 'axios'


const axiosInterceptors = () => {

    const onRequestSuccess = config => {
        config.timeout = 100000;
        config.withCredentials = true;
        return config;
    };
    const onResponseSuccess = (response) => response;
    const onResponseError = error => {
        return Promise.reject(error);
    };
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export {
    axiosInterceptors
};
