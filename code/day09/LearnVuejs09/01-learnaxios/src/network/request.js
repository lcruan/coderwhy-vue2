import axios from 'axios'

// 方法一：通过传success和failure来回调（回调函数方式）
// export function request(config, success, failure) {
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/hy66',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config).then(res => {
//         // console.log(res);
//         success(res);
//     }).catch(err => {
//         // console.log(err);
//         failure(err);
//     });
// }

// 方法二：回调函数方式
// export function request(config) {
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/hy66',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//         // console.log(res);
//         config.success(res);
//     }).catch(err => {
//         // console.log(err);
//         config.failure(err);
//     });
// }

// 方法三：通过Promise方案
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1. 创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://152.136.185.210:7878/api/hy66',
//             timeout: 5000
//         });

//         // 2. 发送真正的请求
//         instance(config).then(res => {
//             resolve(res);
//         }).catch(err => {
//             reject(err);
//         })
//     });
// }

// 最终方案
export function request(config) {
     // 1. 创建axios实例
     const instance = axios.create({
         baseURL: 'http://152.136.185.210:7878/api/hy66',
         timeout: 5000
     });
     // 2. axios的拦截器
     // 2.1 请求拦截的作用
     instance.interceptors.request.use(config => {
        // console.log(config);
        // （1）比如config中的一些信息不符合服务器的要求
        // （2）比如每次发送网络请求时，都希望在界面中显示一个请求的图表（请求圆圈转圈）
        // （3）某些网络请求(比如登录)，必须携带一些特殊的信息
        return config;
     }, err => {
        // console.log(err);
     });
     // 2.2 响应拦截
     instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data;
     }, err => {
        console.log(err);
     });
     // 3. 发送真正的请求 instance本身返回值就是Promise
     return instance(config);
}