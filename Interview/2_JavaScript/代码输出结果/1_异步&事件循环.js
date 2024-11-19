// 1. 同步代码执行完毕，才去执行微任务
const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
});
promise.then(() => {
    console.log(3);
});
console.log(4); 