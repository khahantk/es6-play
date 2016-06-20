//ES6 simple object literal
//1. concise property

let name = 'John Doe', age = 20, address = 'Street No1';

let person = {
    name,
    age,
    address
};

console.log(person.name);
console.log(person.age);
console.log(person.address);

let person2 = {
    name: 'John Doe',
    sayHello(){
        return 'Hello: '+ this.name;
    },
    anotherMethod(param1, param2){
        console.log('another method call');
    }
  /* add more method here */
};

console.log(person2.name); //ouput: John Doe
console.log(person2.sayHello()); //output: Hello: John Doe

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