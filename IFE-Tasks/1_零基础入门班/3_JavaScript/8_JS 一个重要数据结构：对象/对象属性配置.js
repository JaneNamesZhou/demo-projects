let person = {
};

Object.defineProperty(person, 'name', { 
    get: function () {
        console.log('getter');
        return this._name;

    },
    set: function (newName) {
        console.log('setter');
        this._name = newName;
    },
});
person.name = 'BB';
console.log(person.name);
