console.log('-----1 字符串方法-----');
console.log('-----字符串连接-----');

/**
 * @param {string} firstStr
 * @param {string} lastStr
 */
function concatString(firstStr, lastStr) {
    // you code here
    return firstStr + ' ' + lastStr;
}

// 测试用例
console.log(concatString("Jennie", "Kim")); // "Jennie Kim"
console.log(concatString(" Congratulation！", "you are the winner")); // "Congratulation！，you are the winner"

console.log('-----字符串插值-----');
/**
 * @param {string} name
 */
function sayHello(name) {
    // you code here
    return `Hello, ${name}`;
}

//测试用例
console.log(sayHello("Amy")); // "Hello, Amy"

console.log('-----1-1 slug-----');

/**
 * @param {string} name
 */
const convertToSlug = (name) => {
    //your code here
    let r = name.toLowerCase().replace(/ /g, '-');
    return r.substring(0, 15);
};

// 测试用例
console.log(convertToSlug("to do list")); // "to-do-list"
console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

console.log('-----1-2 用户饮水信息-----');
const data = [
    "monday - 500ml",
    "mONday - 330",
    "monday - 150ml",
    "Tuesday - 100ml",
    "Tuesday - 330ml",
    "weDnesDay - 230",
    "TursDAy - 330ml",
    "Friday - 500",
    "Saturday - 100ml",
    "sunday - 250",
    "sunday - 100ml",
];

const drinkInfo = (data) => {
    // your code here
    let result = {};
    data.forEach(item => {
        let day = item.split(' - ')[0].toLowerCase();
        let ml = item.split(' - ')[1];
        if (result[day]) {
            result[day] += parseInt(ml);
        } else {
            result[day] = parseInt(ml);
        }
    })
}
drinkInfo(data);

// TODO: 实现检索功能
/**
 * @param {string} day
 * @param {Array} data
 */
const query = (day) => {
    //your code here
    return data.filter(item => item.toLowerCase().indexOf(day.toLowerCase().trim()) !== -1);
};

// 测试用例
console.log(query(" Tuesday   ")); // ["Tuesday - 100ml","Tuesday - 330ml"]
console.log(query("Friday")); // ["Friday - 500ml"]

console.log('-----1-3 getCountTodos-----');

/**
 * @param {string} todos
 */
const getCountTodos = (todos) => {
    return todos.split(",").length;
};

// 测试用例
console.log(getCountTodos("Laundry, Wash dishes, Clean table")); // 3
console.log(getCountTodos("Feed cat, Degrease bike chain")); // 2

console.log('-----1-3 removeRepetition-----');
/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    // do something
    // return str.replace(/(.)\1+/g, '$1');
    let result = '';
    let lastChar = '';

    for (let char of str) {
        if (char !== lastChar) {
            result += char;
            lastChar = char;
        }
    }

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc

console.log('-----1-3 isPalindromicString-----');
/**
* @@param {string} str
* @return {Boolean} 如果是返回 true，如果不是回文字符串 返回 false
*/
function isPalindromicString(str) {
    // do something
    // return str.split('').reverse().join('') === str;
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// 测试用例
console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false

console.log('-----1-4 凯撒加密算法-----');

/**
 * @description 字符串加密
 * @param {number} offset偏移量
 * @param {string} str 需要加密的字符串
 * @return {string} 返回加密字符串
 */
function encrypt(offset, str) {
    //这里实现加密算法
    let result = '';
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i].charCodeAt(0));
    }
    for (let i = 0; i < strArr.length; i++) {
        result += String.fromCharCode((strArr[i] + offset));
    }
    return result;
}

/**
 * @description 字符串解密
 * @param {number} offset 偏移量
 * @param {string} str
 * @return {string} 返回加密字符串
 */
function decrypt(offset, str) {
    //这里实现解密算法
    let result = '';
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i].charCodeAt(0));
    }
    for (let i = 0; i < strArr.length; i++) {
        result += String.fromCharCode((strArr[i] - offset));
    }
    return result;
}

console.log(encrypt(3, "abc"));
console.log(decrypt(3, "def"));

console.log('-----1-4 打字机效果生成器-----');
function generateTypeEffect(str) {
    //这里实现打字机效果
    //将内容显示在h2中
    let n = 1;
    const intervalId = setInterval(function () {
        if (n > str.length) clearInterval(intervalId);
        console.log(str.substring(0, n));
        n++
    }, 500);
}

console.log(generateTypeEffect("Hello World!"));

console.log('-----2 JavaScript 的大数问题-----');

console.log('-----2-1 大数相加-----');
function largeNumAdd(num1, num2) {
    // 在这里实现大数相加函数
    // 确保 num1 和 num2 都是非空字符串
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        throw new Error('Both inputs must be strings');
    }

    // 去除前导零
    num1 = num1.replace(/^0+/, '');
    num2 = num2.replace(/^0+/, '');

    // 确保 num1 不短于 num2
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    // 补齐较短的字符串
    num2 = num2.padStart(num1.length, '0');

    let carry = 0;
    let result = '';

    // 从右到左逐位相加
    for (let i = num1.length - 1; i >= 0; i--) {
        const sum = parseInt(num1[i], 10) + parseInt(num2[i], 10) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    // 如果最后还有进位，添加到结果前面
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

console.log(largeNumAdd("11", "123")); //->"134"
console.log(largeNumAdd("235656", "746433225")); // ->""746668881""
console.log(largeNumAdd("3456786543355", "222222234567778")); // ->"225679021111133"

function largeNumPlus(num1, num2) {
    // 在这里实现大数相加函数
    // 确保 num1 和 num2 都是非空字符串
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        throw new Error('Both inputs must be strings');
    }

    // 去除前导零
    num1 = num1.replace(/^0+/, '');
    num2 = num2.replace(/^0+/, '');

    // 确保 num1 不短于 num2
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    let result = 0;

    // 从右到左逐位相加
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let x = parseInt(num1[i], 10);
            let y = parseInt(num2[j], 10);
            const sum = x * y * Math.pow(10,
                num1.length + num2.length - i - j - 2);
            result += sum;
        }
    }

    return result.toString();
}

//测试用例
console.log(largeNumPlus("11", "123")); //->"134"
console.log(largeNumPlus("235656", "746433225")); // ->""746668881""
console.log(largeNumPlus("3456786543355", "222222234567778")); // ->"225679021111133"