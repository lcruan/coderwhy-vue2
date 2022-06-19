<template>
  <div id="app">
    <!-- 一定要加这个占位符 不然不显示 -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar  from './components/MainTabBar';
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
