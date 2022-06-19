<template>
<!-- 所有的item都展示同一个文字同一个图片 -->
<div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
         <slot name="item-icon"></slot>
    </div>
    <div v-else>
        <slot name="item-icon-active"></slot>
    </div>
    <!-- <slot :class="{active: isActive}" name="item-text"></slot> -->
    <!-- 加一个div 是为了防止插槽替换 把样式替换了 -->
    <div :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
</div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true
        }
    },
    methods: {
        itemClick() {
            // console.log(this.$route)
            this.$router.replace(this.path);
            
        }
    },
    computed: {
        isActive() {
            // /home  -> item1(/home)  = true
            // /home  -> item1(/category)  = false
            // /home  -> item1(/cart)  = false
            // /home  -> item1(/profile)  = false
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle() {
            // this.isActive 是调用上面的方法
            return this.isActive ? {color: this.activeColor} : {}
        }
    }
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