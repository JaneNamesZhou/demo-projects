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

function Teacher(name, age, subject) {
    //you code here
    this.hobbies = ['跑步', '游泳'];
    // 调用父类构造函数，实现继承
    Person.call(this, name, age);
    this.subject = subject;

}
// 设置 Teacher 的原型对象
Teacher.prototype = Object.create(Person.prototype);

// 修复 Teacher 构造函数的指向
Teacher.prototype.constructor = Teacher;

// 在 Teacher 的原型对象上定义额外的方法
Teacher.prototype.teach = function() {
    console.log(`${this.name} is teaching ${this.subject}.`);
};


var teacherWang = new Teacher("Miss Wang", "28", "English");
var teacherLiu = new Teacher("Miss Liu", "34", "Chiese");

//获取 obj 的原型对象
function getProto(obj) {
    // your code here
    return obj.__proto__;
}
//验证obj_instance是否是obj_proto的实例对象，如果是返回true，如果不是返回false
function isInstance(obj_instance, obj_proto) {
    // your code here
    return obj_instance instanceof obj_proto;
}
//验证attr属性是否是obj自己的属性而不是继承而来的，如果是返回true，如果不是返回false
function isOwnProperty(attr, obj) {
    return obj.hasOwnProperty(attr);
}

//测试用例
teacherWang.teach(); //Miss Wang正在教授English课程
teacherLiu.teach(); //Miss Wang正在教授Chinese课程
console.log(isInstance(teacherWang, Teacher)); // ->true  teacherWang是Teacher的实例
console.log(isInstance(teacherLiu, Teacher)); // ->true  teacherLiu是Teacher的实例
console.log(getProto(teacherLiu)); // -> Teacher
console.log(isOwnProperty("hobbies", teacherLiu)); // -> true hobbies是teacherLiu实例私有属性
console.log(isOwnProperty("hobbies", teacherWang)); // -> true hobbies是teacherWang实例私有属性
teacherWang.hobbies.push("阅读"); //teacherWang添加了一个阅读爱好
teacherLiu.hobbies.push("爬山"); //teacherLiu添加了一个爬山爱好
console.log(teacherWang.hobbies); //(3) ['跑步', '游泳', '阅读']
console.log(teacherLiu.hobbies); //(3) ['跑步', '游泳', '爬山']