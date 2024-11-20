// 计算BMI
console.log('-----BMI-----')
let weight = 60;
let height = 1.7;

let bmi = Math.round(weight / (height * height));

console.log(bmi);



console.log('-----calculateSum-----')
// 打折
/**
 * @method calculateSum
 * @param {number }price 打折钱的总消费额
 * @param {Boolean}vip 是否为 vip
 * @return {number} 返回打折后的总金额
 */
function calculateSum(price, vip) {
    // your code here
    let result = price;
    if (vip) {
        result *= 0.98;
    }
    if (result >= 300) {
        result -= 30;
    }
    else if (result >= 200) {
        result -= 10;
    }
    else if (result >= 100) {
        result -= 5;
    }
    return result;
}
console.log(calculateSum(300, false))
console.log(calculateSum(300, true))


console.log('-----isNumeric-----')
// 判断是否为数字
/**
 * @description 实现判断参数是否为合法的数字类型，如何是返回 ture ，如果不是 返回 false。
 * @method isNumeric
 * @param num 任意数据类型的变量
 * @return {Boolean} 如何是数字类型返回 ture ，如果不是 返回 false。
 */
function isNumeric(num) {
    //your code here
    return typeof num === 'number' && !isNaN(num);
}

//测试用例
console.log(isNumeric("0")); // ->false
console.log(isNumeric(0)); // ->true
console.log(isNumeric(null)); // ->false
console.log(isNumeric("")); // ->false
console.log(isNumeric(" ")); // ->false
console.log(isNumeric(123));       // true
console.log(isNumeric(123.45));    // true
console.log(isNumeric('123'));     // false
console.log(isNumeric(NaN));       // false
console.log(isNumeric(Infinity));  // false
console.log(isNumeric(-Infinity)); // false
console.log(isNumeric(0));         // true
console.log(isNumeric(-0));        // true
console.log(isNumeric(null));      // false
console.log(isNumeric(true));      // false
console.log(isNumeric({}));        // false
console.log(isNumeric([]));        // false


console.log('-----isUndefined-----')
// 判空
/*
实现一个判断传入的参数是否为 undefined 类型
返回一个布尔值，如果是undefied 为true，否之，为fase
*/
function isUndefined(arg) {
    //do something
    return typeof arg === 'undefined';
}

console.log('-----isNull-----')
/*
实现一个判断传入的参数是否为 null 类型
返回一个布尔值，如果是null 为true，否之，为fase
*/
function isNull(arg) {
    return arg === null;
}

// 测试用例
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(o); // ->true
console.log('----');
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false