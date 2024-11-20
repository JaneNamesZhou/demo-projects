console.log('-----showMeassage-----');
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `showMessage()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hello,stranger!\"` by calling the `showMessage()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here
function showMeassage(name) {
    return "您好，" + name + "!";
}
console.log(/* 调用showMessage函数 */);
console.log(showMeassage('陌生人'));

console.log('-----showMeassage_2-----');
let showMeassage_2 = (name) => "您好，" + name + "!";
console.log(showMeassage_2('ABC'));

setTimeout(() => {
    console.log(showMeassage_2('EFG'));
}, 1000);

console.log('-----temperatureBodyDetection-----');
// 体温打卡
let temp = 36.5;
function temperatureBodyDetection(success, fail) {
    if (temp >= 36 && temp <= 38)
        success() /*执行成功函数*/
    else
        fail() /*执行失败函数*/
}

var success = () => console.log('体温正常，打卡成功！'); /* finish the function expression */
var fail = () => console.log('体温异常，打卡失败！！');  /* finish the function expression */

temperatureBodyDetection(success, fail) /**调用打卡函数**/


console.log('-----作用域-----');
var a = 1; //全局作用域
function x() {
    var b = 2;
    function y() {
        var c = 3;
        function z() {
            var d = 4;
        }
        z();
    }
    y();
}

x();

console.log('-----sleep-----');
function sleep() {
    console.log("I'm sleepy!");
    return "我睡着了";
    return "我在打呼";
}

console.log(sleep());

console.log('-----addTwo-----');

var x = 1;
function addTwo() {
    x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
