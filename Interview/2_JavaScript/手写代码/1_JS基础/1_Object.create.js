function createObject(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null');
    }

    function F() { }  // 创建一个空的构造函数
    F.prototype = proto;  // 将构造函数的原型设置为传入的原型对象

    const obj = new F();  // 创建一个新对象，其原型为传入的原型对象

    if (propertiesObject) {
        Object.defineProperties(obj, propertiesObject);
    }

    return obj;
}

//1. 创建一个没有原型的新对象
const obj = createObject(null);
console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null

//2. 创建一个具有指定原型的新对象
const parent = {
    name: 'Parent',
    sayHello: function() {
        console.log('Hello from ' + this.name);
    }
};

const child = createObject(parent);
child.name = 'Child';
child.sayHello(); // 输出: Hello from Child

//3. 使用 propertiesObject 参数
const prototype = {
    method: function() {
        console.log('Method called');
    }
};

const object = createObject(prototype, {
    property1: {
        value: 'value1',
        writable: true,
        enumerable: true,
        configurable: true
    },
    property2: {
        value: 'value2',
        writable: false,
        enumerable: false,
        configurable: false
    }
});

console.log(object.property1); // 'value1'
console.log(object.property2); // 'value2'
object.method(); // 输出: Method called