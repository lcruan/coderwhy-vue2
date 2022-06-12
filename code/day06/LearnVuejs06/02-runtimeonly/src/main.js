import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function(h) {
    return h(App);
  }
})
console.log(App);

// 那么.vue文件中template是由谁处理的呢？
// 是由vue-template-compiler处理的 将.vue文件的template解析为render函数的（其实就是对象）
// render -> vdom -> UI