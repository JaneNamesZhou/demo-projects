// 实现instanceof
function myInstanceof(obj, constructor) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    let proto = Object.getPrototypeOf(obj); // 获取对象的原型
    let prototype = constructor.prototype;  // 获取构造函数的原型

    while (proto) {
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto); // 沿原型链向上查找
    }

    return false;
}

console.log(myInstanceof("AAA", Object))
console.log("AAA" instanceof Object)

let n1 = 0.1, n2 = 0.2
console.log(n1 + n2)  // 0.30000000000000004