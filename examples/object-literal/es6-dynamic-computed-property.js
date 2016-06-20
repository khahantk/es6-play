
// ES6 - Dynamic object key
const hello = 'sayHello';
let person3 = {
    name: 'John Doe',
    [hello](){
        return 'Hello: ' + this.name;
    }
};

console.log(person3[hello]());  //output: Hello: John Doe

// ES6 - Dynamic object key - Using Symbol
const say = Symbol('sayHello');
let person4 = {
    name: 'John Doe',
    [say](){
        return 'Hello: ' + this.name;
    }
};

console.log(person4[say]()); //output: Hello: John Doe