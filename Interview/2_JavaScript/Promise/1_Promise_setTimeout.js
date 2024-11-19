// 异步操作

console.log('-----异步操作-----')
setTimeout(() => {
    if (isEven()) {
        console.log('是偶数!')
    } else {
        console.log('是奇数！')
    }
}, 1000)

console.log('-----Promise 形式-----')

//Promise封装
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let r = isEven();
        if (r) {
            resolve(r)
        } else {
            reject(r)
        }
    }, 1000)
});


p.then(
    (value) => {
        console.log('是偶数!' + value)
    },
    (reason) => {
        console.log('是奇数！' + reason)
    })

function isEven() {
    let min = 0, max = 10;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num % 2 === 0;
}