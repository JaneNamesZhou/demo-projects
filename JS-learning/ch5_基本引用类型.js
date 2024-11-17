console.log("------5.1 Date------");

let now = new Date();
console.log(now);

let someDate = new Date(Date.parse("May 23, 2019"));
// 等价于
// let someDate = new Date("May 23, 2019");
console.log(someDate);