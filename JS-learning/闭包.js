function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter(); // 输出: 1
counter(); // 输出: 2