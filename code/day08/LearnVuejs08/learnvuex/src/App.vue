<template>
  <div id="app">
    <h2>-----------App内容----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!-- mutations传递一个参数 -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <!-- mutation传递一个对象 -->
    <button @click="addStudent">添加学生</button>

    <h2>-----------App内容:getters相关信息----------</h2>
    <!-- powerCounter是按照属性来使用，不需要加小括号 -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <!-- 排除库里 -->
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>-----------App内容:info对象的内容是否是响应式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-----------App内容：modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    


    <h2>-----------Hello Vuex内容----------</h2>

    <!-- 这个地方counter冒号不能去掉，如果去掉就传过去"conter"字符串 -->
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import { INCREMENT } from './store/mutations.types'
export default {
  name: 'App',
  data() {
    return {
      message: '我是App组件'
    }
  },
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter(s => s.age > 20)
  //   }
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    // mutations传递一个参数
    addCount(count) {
      // 1. 普通提交风格
      // this.$store.commit('incrementCount', count)
      // 2. 特殊提交风格
      this.$store.commit({
        type: 'incrementCount',
        count
      });
    },
    // mutatinos传递一个对象
    addStudent() {
      const stu = {id: 114, name: 'alan', age: 35}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo');
      // 异步操作先转发到action里面，再从action里面commit到mutation
      // dispatch还可以返回Promise 
      this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(res => {
        console.log('里面完成了提交');
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit('updateName','lisi');
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName');
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
</style>
