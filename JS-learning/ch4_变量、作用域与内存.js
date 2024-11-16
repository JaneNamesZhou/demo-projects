
console.log("------4.1 原始值与引用值------");
let person = new Object();
person.name = "Nicholas";
console.log(person.name); // "Nicholas"

let name = "Nicholas";
name.age = 27;
console.log(name.age); // undefined

// 引用值复制（引用）
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas"

// 传递参数
function addTen(num) {
    num += 10;
    return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20，没有变化
console.log(result); // 30


function setName(obj) {
    obj.name = "Nicholas";
}
let person_1 = new Object();
setName(person_1);
console.log(person_1.name); // "Nicholas"

console.log(person instanceof Object); // 变量 person 是 Object 吗？
console.log(person instanceof Array); // 变量 person 是 Array 吗？
console.log(person instanceof RegExp); // 变量 person 是 RegExp 吗？

console.log("------4.2 执行上下文与作用域------");
