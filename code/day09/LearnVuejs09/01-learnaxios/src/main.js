import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 1. axios的基本使用
// axios({
//   url: 'https://httpbin.org/get',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// });

// 使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66';
// axios.defaults.timeout = 5000

// // 2. axios发送并发请求
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }), axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }));

// 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/hy66',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// });

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });

// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 10000
// });

// 封装request模块
import {request} from './network/request'

// 方法一：通过传success和failure来回调
// request({
//   url: '/home/multidata',
// }, res => {
//   console.log(res);
// },
// err => {
//   console.log(err);
// })

// 方法二：回调函数方式
// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failure: function(err) {

//   }
// });

// 最终方案：
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
});

// 数组解构
// const names = ['why', 'kobe', 'james']
// const [name1, name2, name3] = names;
// console.log(name1);
// console.log(name2);
// console.log(name3);
