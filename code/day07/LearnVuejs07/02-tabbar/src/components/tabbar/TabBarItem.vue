<template>
<!-- 所有的item都展示同一个文字同一个图片 -->
<div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
</div>
</template>

<script>
export default {
    name: 'TabBarItem'
}
</script>

<style scoped>
/* 均等分1份 */
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* tabbar常用高度为49px */
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 图片下面多了3个像素 */
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>