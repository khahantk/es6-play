/**
 * Created by chung on 6/8/16.
 */
/*
 NOTE:
 - New Feature
 - Primitive type
 - Hidden object key (for..in)
 - As an Unique Identifier
 - Avoid overriding object keys
 */

let s1 = Symbol();
let s2 = Symbol();

console.log(s1 == s2); //output: false

let s3 = Symbol('user');
let s4 = Symbol('user');

console.log(s3 == s4); //ouput: false

let s5 = Symbol('email');
let s6 = Symbol('email');
let user = {
    name: 'John Doe',
    age: 20,
    [s5]: 'johndoe@gmail.com',
    [s6]: 'value2'
}

for(let key in user){
    console.log(`${key} = ${user[key]}`);
    /* output
     name = John Doe
     age = 20
     */
}
console.log(Object.getOwnPropertyNames(user)); //output: [ 'name', 'age' ]
console.log(Object.keys(user)); //output: [ 'name', 'age' ]
console.log(JSON.stringify(user)); //output: [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(user)); //output: [ Symbol(email), Symbol(email) ]



