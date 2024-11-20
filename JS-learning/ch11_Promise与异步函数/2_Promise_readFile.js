const fs = require('fs');

console.log('-----回调函数 形式-----')

// 回调函数 形式
fs.readFile('content.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

console.log('-----Promise 形式-----')

// Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
});


p.then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log('err:' + reason)
    })


