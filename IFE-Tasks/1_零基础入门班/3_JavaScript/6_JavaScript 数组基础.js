console.log('-----数组定义-----');

const emptyArr = [];
const names = ["Zack", "Alex"];
const scores = [99, 72, 60, 12];
const mixValues = [10, false, "apple"];

console.log('-----数组长度-----');
console.log(emptyArr.length); // 0
console.log(names.length); // 2
console.log(scores.length); //4

console.log('-----数组元素-----');
const users = ["Sam", "Alex", "Charley"];
console.log(users[1]); //"Alex"

const arr = [1, 2, 3];
console.log(arr.push(20)); console.log(arr); // 返回4（数组长度） 数组为:[1,2,3,20]
console.log(arr.pop()); console.log(arr); // 返回20（最后一个元素） 数组为:[1,2,3]
console.log(arr.shift()); console.log(arr); // 返回1 （第一个元素）数组为:[2,3]
console.log(arr.unshift(10)); console.log(arr); // 返回3（数组长度） 数组为:[10,2,3]


console.log('-----数组和常量-----');
const users_1 = [];
users_1.push("Amy"); //返回数组长度1
console.log(users_1); // ['Amy'] 数组改变了

console.log('-----forEach 迭代数组-----');
const grades = ["Zack", "Alex"];

grades.forEach(function (grade) {
  console.log(grade);
});

console.log('-----数组解构赋值-----');
var user1, user2;
[user1, user2] = ['Amy', 'Jennie'];
console.log(user1); // Amy
console.log(user2); // Jennie

[user1, user2, ...restUsers] = ['Amy', 'Jennie', 'Zack', 'Penny', 'Danny'];
console.log(user1); // Amy
console.log(user2); // Jennie
console.log(restUsers); // [Zack, Penny, Danny]


console.log('-----forEach 迭代数组并返回值-----');
function logGrades(grades) {
  grades.forEach(function (grade) {
    console.log(grade);
    return 10; //forEach 本身不使用回调函数的返回值
  });
  return 20;
}

console.log(logGrades([7, 8, 9]))