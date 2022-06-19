<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的相关信息，嘿嘿嘿</p>
        <h2>{{userId}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId() {
            // $route是指当前哪一个路由处于活跃状态，你拿到的就是哪个路由
            // $router是指路由配置项中 const router = new VueRouter() 的router对象
            return this.$route.params.userId;
        }
    },
    methods: {
        btnClick() {
            // 所有的组件都继承自Vue类的原型
            console.log(this.$router);
            console.log(this.$route);

            console.log(this.name); //coderwhy
        }
    },
    created() {
        console.log('User created');
    },
    destroyed() {
        console.log('User destroyed');
    },
}
</script>