// 思路
/**
 * 1 初始结构搭建
 * 2 resolve,reject结构搭建
 * 3 resolve,reject代码实现
 * 4 throw 抛出异常改变状态
 * 5 Promise对象状态只能改变一次
 * 6 then方法执行回调
 * 
 * 7 异步任务 then方法实现
 * 8 指定多个回调的实现
 * 
 * 9 同步任务 then方法实现
 * 10 异步任务 then方法实现
 * 11 catch 方法穿透
 * 12 Promise.resolve, reject 封装
 * 
 * 13 Promise.all Promise.race 封装
 */



function Promise(excuter) {
    let self = this;
    self.PromiseState = 'pending';
    self.PromiseResult = undefined;
    self.callbacks = [];
    function resolve(value) {
        // 5 Promise对象状态只能改变一次
        if (self.PromiseState !== 'pending') {
            return;
        }
        self.PromiseState = 'fulfilled';
        self.PromiseResult = value;
        self.callbacks.forEach(item => {
            item.onResolved(value);
        });
    }

    function reject(value) {
        // 5 Promise对象状态只能改变一次
        if (self.PromiseState !== 'pending') {
            return;
        }
        self.PromiseState = 'rejected';
        self.PromiseResult = value;
        self.callbacks.forEach(item => {
            item.onRejected(value);
        });
    }
    try {
        excuter(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    // 9 同步任务 then方法实现
    if (typeof onResolved !== 'function') {
        onResolved = value => value;
    }
    if (typeof onResolved !== 'function') {
        onResolved = value => {
            throw value;
        }
    }
    return new Promise((resolve, reject) => {
        let self = this;
        function callback(type) {
            try {
                let result = type(self.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    });
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }
        if (self.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (self.PromiseState === 'rejected') {
            callback(onRejected);
        }
        // 7 异步任务 then方法实现
        if (self.PromiseState === 'pending') {
            self.callbacks.push({
                onResolved: () => {
                    callback(onResolved);
                },
                onRejected: () => {
                    callback(onRejected);
                }
            });
        }
    });
}

Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            });
        } else {
            resolve(value);
        }
    });
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}

Promise.all = function (promises) {
    return new Promise((resolve, reject) => {

       for(let i = 0; i < promises.length; i++) {
           promises[i].then(v => {
            
            
           }, r => {
               reject(r);
           });
       }
    })
}