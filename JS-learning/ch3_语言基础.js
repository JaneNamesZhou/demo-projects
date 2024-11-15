//#region var关键字

// 声明作用域
message_1 = 100; // 合法，但不推荐
console.log(message_1); //100

function test() {
    message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"

var message_2 = "hi",
    found = false,
    age_2 = 29;

// 声明提升
function foo() {
    console.log(age);
    var age = 26; // 声明提升
}
foo(); // undefined

// 等价于
// function foo() {
//     var age;
//     console.log(age);
//     age = 26;
// }
// foo(); // undefined

//#endregion

//#region let关键字

if (true) {
    var name = 'Matt';
    console.log(name); // Matt 
}
console.log(name); // Matt

if (true) {
    let age = 26;
    console.log(age); // 26 
}
// console.log(age); // ReferenceError: age 没有定义

// 暂时性死区
// name 会被提升
console.log(name_3); // undefined 
var name_3 = 'Matt'; 
// age 不会被提升
// console.log(age_3); // ReferenceError：age 没有定义
let age_3 = 26;

//#endregion