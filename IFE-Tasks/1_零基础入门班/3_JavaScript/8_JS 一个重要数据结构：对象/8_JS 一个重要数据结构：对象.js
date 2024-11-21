console.log('-----对象基础-----');

const student = {
    id: 1,
    name: "Jackson",
    age: 20,
    requiredCourses: ['Linear Alberia ', 'Intorduction of Computer', ' Avanced Mathematics'],
    optionalCourses: ['Software Engineering', ' Signal and System', 'Principle of Compiling', ' Data Structure']
};

console.log(student);

//读取属性值
student.id  //1
student.name //Jackson
student.age //20
student.requiredCourses //['Linear Alberia ','Intorduction of Computer',' Avanced Mathematics']
student.optionalCourses //['Software Engineering',' Signal and System','Principle of Compiling',' Data Structure']

//更新对象属性值
student.id = 2
student.age = 21
console.log(student.id) //2
console.log(student.age) //20

const key = "id";
console.log(student[key]); // 1

const sum = (num1, num2) => {
    console.log({ num1 }); // {num1: 1}
    console.log({ num2 }); // {num2: 3}
    let total = num1 + num2;
    console.log({ total }); // {total: 4}
    return total;
};

// 用例
sum(1, 3);

console.log('-----银行账户-----');
const account = {
    name: "Jackson",
    balance: 100,
    rank: 36,
    interestRatePercent: 0.05,
    deposit: function (amount) {
        this.balance += amount;
    },
    withdraw: function (amount) {
        this.balance -= amount;
    },
};

function printAccountInfo(account) {
    console.log(`Hi, ${account.name}`);
    console.log(`Your balance is ${account.balance}`);
    console.log(`Your rank is ${account.rank}`);
    console.log(`Your interest rate is ${account.interestRatePercent}`);
}

printAccountInfo(account);

function isVip(account) {
    return account.hasOwnProperty('isVip');
}

console.log(isVip(account));

function printInfo(account) {
    for (let key in account) {
        console.log(`${key}: ${account[key]}`);
    }
}

printInfo(account);

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: 'Jackson' }));


console.log('-----对象遍历-----');
let shoppingList = {
    hamburger: 12,
    milk: 5,
    orange: 25,
    banana: 49,
    ipad: 10111,
};

/**
 * @description 获取购物清单所有的商品
 * @method getKeys
 * @param {Object} obj 对象
 * @return {Array} 返回包含对象所有键名的数组
 */
function getKeys(obj) {
    // your complement
    return Object.keys(obj);
}

/**
 * @description 获取购物清单所有商品的价格
 * @method getVals
 * @param {Object} obj 对象
 * @return {Array} 返回包含对象所有键值的数组
 */
function getVals(obj) {
    // your complement
    return Object.values(obj);
}

/**
 * @description 计算购物清单总价
 * @method sumshoppingList
 * @param {Object} obj 对象
 * @return {Number} 返回购物清单的总价
 */
function sumshoppingList(obj) {
    // your complement
    return Object.values(obj).reduce((total, price) => total + price, 0);
}

/**
 * @description 给购物清单排序
 * @method ordershoppingList
 * @param {Object} obj 对象
 * @param {Boolean} ascendingOrder 如果值为true，就从小到大排序，值为false，就从大到小排序
 * @return {Object} 返按从大到小或者从小到大规律排序的购物清单列表
 */
function ordershoppingList(obj, ascendingOrder) {
    // your complement 
    return Object.fromEntries(Object.entries(obj).sort(
        (a, b) =>
            ascendingOrder ? a[1] - b[1] : b[1] - a[1]));
}

console.log(getKeys(shoppingList));
console.log(getVals(shoppingList));
console.log(sumshoppingList(shoppingList));
console.log(ordershoppingList(shoppingList, true));

console.log('-----对象解构赋值-----');

let num1 = 1;
let num2 = 0;

//your complement
[num1, num2] = [num2, num1];

console.log(num1, num2);// - > 0 , 1

let person = {
    name: "Amy",
    years: 30,
    score: {
        math: 99,
        chemistry: 80,
        biology: 78,
    },
    hobbies: ["sport", "dance"],
};

// your complement
let { name, years: age,
    score: { math: mathScore, chemistry: chemistryScore, biology: biologyScore },
    hobbies: [hobby1, hobby2],
    marriageStatus = false
} = person;

console.log(name); // Amy
console.log(age); // 30
console.log(mathScore); // 99
console.log(chemistryScore); // 80
console.log(biologyScore); // 78
console.log(hobby1); // sport
console.log(hobby2); // dance
console.log(marriageStatus);


console.log('-----对象引用和复制-----');

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function deepClone(src) {
    // your implement
    let r = {};
    for (let key in src) {
        r[key] = src[key];
    }
    return r;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

console.log('-----end-----');