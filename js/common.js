(function (Vue, axios) {
    // todo 
    // 1. 配置域名 baseURL
    // 2. 将默认的返回数据 进行处理
    // 3. 加遮罩
    const Axios = axios.create({
        baseURL: 'https://apimusic.linweiqin.com/',
        timeout: 10000,
        // 自定义的请求头
        // headers:{
        //  'X-Custom-Header': 'web0316'
        // }
        // 默认允许的请求头 Content-Type
        // headers:{
        //  'Content-Type': 'application/json'
        // }
    });
    // 添加请求的拦截器
    Axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        //console.log(config);
        // token
        // config.params["token"] = "web031620200608"
        // config.params["key"] = "web0316";
        // config["headers"]["X-Custom-Header"] = "web0316";
        app.isLoading = true; 
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // 返回的拦截器
    Axios.interceptors.response.use(function (response) {
        // 只获取 返回数据中的 data  部分
        //console.log(response);
        app.isLoading = false;
        return response.data;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    window.Axios = Axios;

})(Vue, axios)
