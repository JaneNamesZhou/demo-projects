console.log("------8.1 理解对象------");

console.log("------8.2 创建对象------");

function double(value, callback) {
    setTimeout(() =>
        callback(value * 2),
        1000);
}
double(3, (x) =>
    console.log(`I was given: ${x}`)
);
   // I was given: 6（大约 1000 毫秒之后）