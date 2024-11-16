//#region 3.3 变量

//#region var 关键字

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

//#region let 关键字

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

//#region const 关键字
console.log("------const 关键字------");

const age = 26;
// age = 36; // TypeError: 给常量赋值 

// const 也不允许重复声明
const _name = 'Matt';
// const name = 'Nicholas'; // SyntaxError 

// const 声明的作用域也是块
const name_5 = 'Matt';
if (true) {
    const name_5 = 'Nicholas';
}
console.log(name_5); // Matt

const person = {};
person.name = 'Matt'; // ok

let i = 0;
for (const j = 7; i < 5; ++i) {
    console.log(j);
}
// 7, 7, 7, 7, 7 
for (const key in { a: 1, b: 2 }) {
    console.log(key);
}
// a, b 
for (const value of [1, 2, 3, 4, 5]) {
    console.log(value);
}
// 1, 2, 3, 4, 5

//#endregion 

//#endregion


//#region 3.4 数据类型
console.log("------3.4 数据类型------");

//#region typeof 操作符

console.log("------typeof 操作符------");

let message_3 = "some string";
console.log(typeof message_3); // "string" 
console.log(typeof (message_3)); // "string" 
console.log(typeof 95); // "number"

//#endregion

//#region 3.4.2 Undefined 类型
console.log("------3.4.2 Undefined 类型------");

let message_4;
console.log(message_4 == undefined); // true
let message_5 = undefined;
console.log(message_5 == undefined); // true

// 确保没有声明过这个变量
// let age  
// console.log(age); // 报错
console.log(typeof message_4); // "undefined" 
console.log(typeof age_4); // "undefined"

if (message_4) {
    // 这个块不会执行
    console.log("message_4 is defined");
}
if (!message_4) {
    // 这个块会执行
    console.log("message_4 is undefined");
}
// if (age_4) {
//     // 这里会报错
// }

//#endregion

//#region 3.4.3 Null 类型
console.log("--------3.4.3 Null 类型------");

let car = null;
console.log(typeof car); // "object"
if (car != null) {
    // car 是一个对象的引用
    console.log("car is an object");
}
console.log(null == undefined); // true

let message_6 = null;
let age_6;
if (message_6) {
    // 这个块不会执行
    console.log("message_6 is defined");
}
if (!message_6) {
    // 这个块会执行
    console.log("message_6 is undefined");
}
if (age_6) {
    // 这个块不会执行
    console.log("age_6 is defined");
}
if (!age_6) {
    // 这个块会执行
    console.log("age_6 is undefined");
}

//#endregion

//#region 3.4.4 Boolean 类型
console.log("--------3.4.4 Boolean 类型------");

let found_1 = true;
let lost_1 = false;
let message_7 = "Hello world!";
let messageAsBoolean = Boolean(message_7);
if (message_7) {
    console.log("Value is true");
}
//#endregion

//#region 3.4.5 Number 类型

console.log("--------3.4.5 Number 类型------");

let intNum = 55; // 整数
let octalNum1 = 070; // 八进制的 56 
let octalNum2 = 079; // 无效的八进制值，当成 79 处理
let octalNum3 = 08; // 无效的八进制值，当成 8 处理
let hexNum1 = 0xA; // 十六进制 10 
let hexNum2 = 0x1f; // 十六进制 31

// 浮点数
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // 有效，但不推荐
// let floatNum1 = 1.; // 小数点后面没有数字，当成整数 1 处理
// let floatNum2 = 10.0; // 小数点后面是零，当成整数 10 处理
let floatNum = 3.125e7; // 等于 31250000

// 值的范围
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false, 因为result将不再是有限的数值，而是变成了Infinity

// NaN
console.log(0 / 0); // NaN 
console.log(-0 / +0); // NaN
console.log(5 / 0); // Infinity 
console.log(5 / -0); // -Infinity
console.log(NaN == NaN); // false

console.log(isNaN(NaN)); // true 
console.log(isNaN(10)); // false，10 是数值
console.log(isNaN("10")); // false，可以转换为数值 10 
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值 1

// 数值转换
console.log("数值转换："); // NaN 
// Number()
console.log(Number("Hello world!")); // NaN 
console.log(Number("")); // 0 
console.log(Number("000011")); // 11 
console.log(Number(true)); // 1
// parseInt()
console.log(parseInt("1234blue")); // 1234 
console.log(parseInt("")); // NaN 
console.log(parseInt("0xA")); // 10，解释为十六进制整数
console.log(parseInt(22.5)); // 22 
console.log(parseInt("70")); // 70，解释为十进制值
console.log(parseInt("0xf")); // 15，解释为十六进制整数
console.log(parseInt("0xAF", 16)); // 175  
console.log(parseInt("AF", 16)); // 175 
console.log(parseInt("AF")); // NaN
// parseFloat()
console.log(parseFloat("1234blue")); // 1234，按整数解析
console.log(parseFloat("0xA")); // 0 
console.log(parseFloat("22.5")); // 22.5 
console.log(parseFloat("22.34.5")); // 22.34 
console.log(parseFloat("0908.5")); // 908.5 
console.log(parseFloat("3.125e7")); // 31250000 

//#endregion

//#region 3.4.6 String 类型
console.log("--------3.4.6 String 类型------");
let firstName = "John";
let lastName_1 = 'Jacob';
let lastName_2 = `Jingleheimerschmidt`

let age_7 = 11;
console.log(age_7.toString()); // 字符串"11" 
let found_7 = true;
console.log(found_7.toString()); // 字符串"true"

let num_8 = 10;
console.log(num_8.toString()); // "10" 
console.log(num_8.toString(2)); // "1010" 
console.log(num_8.toString(8)); // "12" 
console.log(num_8.toString(10)); // "10" 
console.log(num_8.toString(16)); // "a"

let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1)); // "10" 
console.log(String(value2)); // "true" 
console.log(String(value3)); // "null" 
console.log(String(value4)); // "undefined"

// 模板字面量
let pageHTML = ` 
<div> 
 <a href="#"> 
 <span>Jake</span> 
 </a> 
</div>`;
console.log(pageHTML);

// 字符串插值
// 标签函数
function myTag(strings, ...values) {
    let str = '';
    for (let i = 0; i < values.length; i++) {
        str += strings[i] + values[i].toUpperCase();
    }
    str += strings[strings.length - 1];
    return str;
}

const name_10 = 'Alice';
const age_10 = 30;

// 使用myTag作为标签函数
// const result_10 = myTag`Hello, ${name_10}. You are ${age_10} years old.`;

// console.log(result_10); // 输出: Hello, ALICE. You are 30 YEARS OLD.

//#endregion

//#region 3.4.7 Symbol 类型
console.log("--------3.4.7 Symbol 类型------");

let sym = Symbol(); 
console.log(typeof sym); // symbol
let fooGlobalSymbol = Symbol.for('foo'); // 创建新符号
let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

let localSymbol = Symbol('foo'); 
let globalSymbol = Symbol.for('foo'); 
console.log(localSymbol === globalSymbol); // false

// 创建全局符号
let s = Symbol.for('foo'); 
console.log(Symbol.keyFor(s)); // foo 
// 创建普通符号
let s2 = Symbol('bar'); 
console.log(Symbol.keyFor(s2)); // undefined
//#endregion

//#region 3.4.8 Object 类型
console.log("--------3.4.8 Object 类型------");
let o = new Object();
let o_1 = new Object; // 合法，但不推荐
//#endregion

//#endregion


//#region 3.5 操作符
// console.log("------3.5 操作符------");
//#endregion


//#region 3.6 语句
// console.log("------3.6 语句------");
//#endregion

//#region 3.7 函数
// console.log("------3.7 函数------");
//#endregion