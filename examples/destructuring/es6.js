//ES6 object destructuring
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 - Street No'
}
//destruct all properties of object
let {firstName, lastName, address} = person;
console.log(firstName, lastName, address);
//output: John Doe 123 - Street No

//destruct some properties of object
//let {firstName, address} = person;
//console.log(firstName, address);


//ES6 array destructuring
var colors = ['1','2', '3', '4','5'];
//destruct all element
var [red, green, blue, white] = colors;
console.log(red, green, blue, white); 
//output: red green blue white
//destruct first and last element of array
var [red1, , ,blue1, white1 ] = colors;

console.log(red1, blue1, white1); //output: 1 3 4
