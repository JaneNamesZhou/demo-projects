console.log('-----数组过滤器 filter-----');
let numbers = [-1, -2, 1, 2, 3];

let positiveNumbers = numbers.filter(function (number) {
    return number > 0;
});
console.log(positiveNumbers); // [1,2,3]


console.log('-----数组过滤器 Map-----');
const numbers_1 = [1, 2, 3, 4];

const doubled = numbers_1.map(function (number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6, 8]

console.log('-----数组过滤器 Map-----');
const numbers_2 = [1, 2, 3];

const sum = numbers_2.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(numbers_2); // [1, 2, 3]
console.log(sum); // 6


console.log('-----数组查找-----');
const numbers_3 = [1, 2, 3, 4];

let a = numbers_3.filter(function (number) {
    return number > 2;
}); // [3]
console.log(a);

let b = numbers_3.filter(function (number) {
    return number > 4;
}); // undefined
console.log(b);

const members = ["Amy", "Lisa", "Jennie"];

console.log(members.includes("Amy")); // true
console.log(members.includes("Jack")); // false

console.log('-----数组对象转字符串-----');

const process = ["Step1", "Step2", "Step3"];
console.log(process.toString()); // "Step1,Step2,Step3"
console.log(process.join("->")); // "Step1->Step2->Step3")

console.log('-----任务一: 期末成绩单-----');
let scores = ["88", "90", "100", "45", "60", "98", "32", "99", "80"];
/**
 * @description 计算学生的总分数
 * @param {array} scores
 * @return {number} 学生的总分数
 */
function getTotalScore(scores) {
    // your code here
    return scores.reduce((previous, current) => {
        return parseInt(previous) + parseInt(current);
    }, 0);
}

/**
 * @description 获得学生的平均分
 * @param {array} scores
 * @return {number} 学生的平均分
 */
function getAverageScore(scores) {
    // your code here
}

/**
 * @description 获得挂科的分数
 * @param {array} scores
 * @return {array} 返回没有及格的分数
 */
function getFailScores(scores) {
    // your code here
}

/**
 * @description 获得加五分之后的成绩单，如果加五分之后，分数超过了100，就取100分
 * @param {array} scores
 * @return {array} 新的成绩单
 */
function getAddFiveScores(scores) {
    // your code here
}

/**
 * @description 计算学生奖学金
 * @param {array} scores
 * @return { number} 奖学金
 */
function getPrize(scores) {
    // your code here
}

console.log(getTotalScore(scores));
console.log(getAverageScore(scores));
console.log(getFailScores(scores));
console.log(getAddFiveScores(scores));
console.log(getPrize(scores));