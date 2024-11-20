console.log('-----布尔隐式转换-----');
const condition1 = "Sam";
const condition2 = 0;

if (condition1) {
    console.log("第一个添加条件为真");
}

if (condition2) {
    console.log("第二个条件为真");
}

console.log('-----条件判断-----');
console.log('-----BMI-----');
function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "过轻";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "正常";
    } else if (bmi >= 25 && bmi < 28) {
        return "过重";
    } else if (bmi >= 28 && bmi < 32) {
        return "肥胖";
    } else {
        return "严重肥胖";
    }
}
console.log(bmi(45, 156));

console.log('-----switch-----');
function bmi_switch(weight, height) {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi < 18.5:
            return "过轻";
        case bmi >= 18.5 && bmi < 25:
            return "正常";
        case bmi >= 25 && bmi < 28:
            return "过重";
        case bmi >= 28 && bmi < 32:
            return "肥胖";
        default:
            return "严重肥胖";
    }
}
console.log(bmi_switch(45, 156));

console.log('-----水仙花数-----');

function numDaffodils(num) {
    // 判断是否为水仙花数
    let result = false;
    let numStr = num.toString();
    if (numStr.length === 3) {
        let num1 = numStr[0];
        let num2 = numStr[1];
        let num3 = numStr[2];
        if (num === (parseInt(num1 * num1 * num1) + parseInt(num2 * num2 * num2) + parseInt(num3 * num3 * num3))) {
            result = true;
        }
    }
    return result;
}

console.log(numDaffodils(153));

console.log('-----循环语句-----');

console.log('-----十进制数字转化为二进制-----');
function dec2bin(decNumber) {
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
    if (typeof decNumber != 'number' || !Number.isInteger(decNumber) || decNumber < 0) {
        return "输入的数字必须为非负整数";
    } else {
        let result = '';
        while (decNumber > 0) {
            result = decNumber % 2 + result;
            decNumber = Math.floor(decNumber / 2);
        }
        return result;
    }
}

console.log(dec2bin(256));
