export default {
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
}