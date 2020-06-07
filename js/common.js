(function () {
    // 对axios 进行封装
    let Axios = axios.create({
        baseURL: "https://apimusic.linweiqin.com/",
        timeout: 10000
    })
    // Add a request interceptor
    Axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    Axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    // 暴露出来的实例
    window.Axios = Axios;


})()