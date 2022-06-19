<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
   
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
     <router-link to="/home">首页</router-link>
     <router-link to="/about">关于</router-link>
     <!-- <router-link :to="'/user/' + userId">用户</router-link> -->
     <!-- <router-link to="/profile">档案</router-link> -->
    <!-- 如果to后面直接写to="{}" 只会当做两个括号字符串解析，加上冒号则会当成对象解析 -->
     <!-- <router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}">档案</router-link> -->
     <button @click="userClick">用户</button>
     <button @click="profileClick">档案</button>
     <!-- 这个地方不要随便加空格  同时正则里面\d{2, 9}也不能随便加-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    // homeClick() {
    //   //通过代码的方式修改路由
    //   // this.$router.push('/home');
    //   this.$router.replace('/home');

    // },
    // aboutClick() {
    //   // this.$router.push('/about');
    //   this.$router.replace('/about');
    // }
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.88
        }
      });
    },
    userClick() {
      this.$router.push('/user/' + this.userId);
    }
  }
}
</script>

<style>
 /* .router-link-active {
  color: #f00;
 } */
 .active {
  color: #f00;
 }
</style>
