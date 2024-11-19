// 柯里化
// 1 定义一个多参数函数：
function add(a, b, c) {
    return a + b + c;
}

// 2 定义一个柯里化函数：
function curry(fn) {
    // 5 柯里化参数的个数： 
    return function curried(...args) {
        if (args.length >= fn.length) { // 6 判断参数个数是否满足要求
            return fn.apply(this, args)
        } else {
            return function (..._args) { // 7 参数不够，继续收集参数
                return curried.apply(this, args.concat(_args))
            }
        }
    }

}

// 3 柯里化函数调用
let curriedAdd = curry(add);

// 4 输出函数调用结果：
console.log(curriedAdd(2)(3)(4)); // 输出 