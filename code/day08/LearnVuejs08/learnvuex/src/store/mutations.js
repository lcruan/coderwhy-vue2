import { INCREMENT } from './mutations.types'

export default  {
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
}