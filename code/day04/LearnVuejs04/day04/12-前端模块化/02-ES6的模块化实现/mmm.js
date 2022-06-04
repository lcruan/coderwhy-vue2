// 1. 导入的{} 中定义的变量
import { flag, sum } from "./aaa.js"

if (flag) {
    console.log('小明是天才，哈哈哈');
    sum(20, 30);
}

// 2. 直接导入export定义的变量
import { num1, height } from './aaa.js'
console.log(num1);
console.log(height);

// 3. 导入 export的function
import { mul, Person } from './aaa.js'

mul(30, 50);
const p = new Person();
p.run();

// 默认导入aaa.js中 default导入的东西 只有一个 而且只能有一个, addr可以随便写 不需要加大括号
// 4. 导入 export default中的内容
import addr from './aaa.js'
addr('你好啊')

// 5. 统一全部导入
// import { flag, num, num1, height, Person, mul, sum } from './aaa.js'
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);