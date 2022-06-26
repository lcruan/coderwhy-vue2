export default {
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