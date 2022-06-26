export default {
    powerCounter(state) {
        return state.counter * state.counter;
    },
    // 获取年龄大于20的学生
    more20stu(state) {
        return state.students.filter(s => s.age > 20)
    },
    // 获取年龄大于20学生的个数
    // 参数getters就是上面的getters对象
    more20stuLength(state, getters) {
        return getters.more20stu.length;
    },
    // 获取年龄大于age的学生  age是一个变量
    moreAgeStu(state) {
        // 返回一个函数，那么在App.vue里面接收到的是一个函数，那么就可以从App.vue里面进行传参了
        // return function(age) {
        //     return state.students.filter(s => s.age > age)
        // }
        return age => {
            return state.students.filter(s => s.age > age)
        }
    }
}