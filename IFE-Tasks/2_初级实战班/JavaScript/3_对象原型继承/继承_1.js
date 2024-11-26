function Person(name, age) { 
    this.name = name;
    this.age = age;
    
}

Person.prototype.sayHi = function () {
    // your code
    console.log('你好，我叫' + this.name);
}

Person.prototype.eat = function () {
    //your code
    console.log(this.name + '在吃饭');
}

Person.prototype.sleep = function () {
    //your code
    console.log(this.name + '在睡觉');
}


 
var person1 = new Person("Jasckson",'18')
var person2 = new Person("Naomi",'6')


console.log(person1.sayHi == person2.sayHi); // ->false
console.log(person1.eat == person2.eat); // ->false
console.log(person1.sleep == person2.sleep); // ->false


