// var Person = {
//     name: 'AMY',
//     age: 18,
//     hobbies: ["游泳", "跑步"],
//     sayHi: function () {
//         console.log('你好，我叫' + this.name);
//     },
//     eat: function () {
//         console.log(this.name + '在吃饭');
//     },
//     sleep: function () {
//         console.log(this.age + '在睡觉');
//     }
// }


function Person(name, age) { 
    this.name = name;
    this.age = age;
    // your code
    this.sayHi = function () {
        // your code
        console.log('你好，我叫' + this.name);
    }
    this.eat = function () {
        //your code
        console.log(this.name + '在吃饭');
    }
    this.sleep = function () {
        //you code
        console.log(this.age + '在睡觉');
    }
}

//测试用例
var person1 = new Person("Jasckson", '18')
console.log(person1.name); // Jackson
person1.sayHi() // Jackson在吃饭
person1.name = 'Jack'
console.log(person1.name); // Jack

var person2 = new Person("Naomi", '6')
console.log(person2.age); // 6
person2.sleep() // Naomi在睡觉
person2.age = '7'
console.log(person2.age); // 7