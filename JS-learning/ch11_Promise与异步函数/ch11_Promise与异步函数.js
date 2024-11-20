console.log("------11.1 异步编程------");

function double(value, callback) {
    setTimeout(() =>
        callback(value * 2),
        1000);
}

double(3, (x) =>
    console.log(`I was given: ${x}`)
);
// I was given: 6（大约 1000 毫秒之后）
try {

    let p = new Promise(() => { });
    setTimeout(console.log, 0, p); // Promise <pending>

    let p1 = new Promise((resolve, reject) => resolve());
    // setTimeout(console.log, 0, p1); // Promise <resolved> 

    // let p2 = new Promise((resolve, reject) => reject());
    // Uncaught error (in promise)
    // setTimeout(console.log, 0, p2); // Promise <rejected>


    setTimeout(console.log, 0, Promise.resolve(3));
} catch (e) {
    console.error(e);
}