import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations.types'


// 1. 安装插件
Vue.use(Vuex);

const muduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            console.log(context);
            setTimeout(() => {
                // 这里的context只会调用自己模块的mutation
                context.commit('updateName', 'wangwu');
            }, 1000);
        }

    },
    getters: {
        fullName(state) {
            return state.name + '111111'
        },
        fullName2(state, getters) {
            return getters.fullName + '222222'
        },
        // 拿到根里面的state
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    }
}

// 2. 创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id:110, name:'why',age:18},
            {id:111, name:'kobe',age:24},
            {id:112, name:'james',age:30},
            {id:113, name:'curry',age:10}
        ],
        info: {
            name: 'kobe',
            age: 40,
            height: 1.98
        }
    },
    mutations: {
        // 方法
        [INCREMENT](state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // mutations传递一个参数
        incrementCount(state, count) {
            // state.counter += count;
            // 对象提交风格时，count是一个对象
            state.counter += count.count;
        },
        addStudent(state, stu) {
            state.students.push(stu);
        },
        updateInfo(state) {
            state.info.name = 'coderwhy';
            // state.info['address'] = '洛杉矶' 没有响应式
            // Vue.set(state.info,  'address', '洛杉矶'); //有响应式

            // delete方式做不到响应式
            // delete state.info.age
            // Vue.delete(state.info, 'age'); // 有响应式

            // 错误的代码： 不能在这里进行异步操作
            // setTimeout(() => {
            //     state.info.name = 'coderwhy'
            // }, 1000);
        }
    },
    actions: {
        // context：上下文 这里可以把context理解为store
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         //不能这么写 改state的唯一途径必须是mutation里面
        //         // context.state.info.name = 'coderwhy'
        //         context.commit('updateInfo');
        //         //可以传递参数
        //         console.log(payload);
        //         payload();
        //     }, 1000);
        // }

        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo');
                    resolve('111111');
                }, 1000);
            })

        }
    },
    getters: {
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
    },
    modules: {
        a: muduleA
    }
})

// 3. 导出store对象
export default store


// 对象解构
const obj = {
    name: 'why',
    age: 18,
    height: 1.88
}
// const name = obj.name;
// const age = obj.age;
// const height = obj.height;
const {name, age, height} = obj;
console.log(name);
