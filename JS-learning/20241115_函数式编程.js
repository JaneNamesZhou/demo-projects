// 函数式编程
// 1、函数可以作为参数传递：
function operation(operator, x, y) {
    return operator(x, y);
}

function operator(x, y) {
    return x + y;
}

// console.log(operation(operator, 1, 2));


// 2、可以作为返回值：
function getOperation(x) {
    return function (y) {
        return x + y;
    }
}
const double = getOperation(1); //返回函数
// console.log(double(5));

// 3、可以赋值给变量：
const add_x = function (a, b) {
    return a + b;
};

// console.log(add_x(1, 2)); // 输出 3


// 4、可以作为对象属性，存储在数据结构中：
const operations = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

// console.log(operations.add(1, 2)); // 输出 3
// console.log(operations.subtract(5, 2)); // 输出 3


// 高阶函数
function map(array, transform) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(transform(array[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = map(numbers, function (x) {
    return x * x;
});
// console.log(squaredNumbers); // 输出 [1, 4, 9, 16]

// 闭包
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
//   console.log(counter()); // 输出 1
//   console.log(counter()); // 输出 2

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


// 事件处理
function handleClick(event) {
    console.log('Button clicked');
}

document.getElementById('myButton').addEventListener('click', handleClick);