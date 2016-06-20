//ES5 object destructuring
var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 - Street No'
}

var firstName = person.firstName;  // John
var lastName = person.lastName; // Doe
var address = person.address; // 123 - Street No

console.log(firstName, lastName, address); //output: John Doe 123 - Street No

//ES5 array destructuring
var colors = ['red','green', 'blue', 'white'];

var red = colors[0],
    green = colors[1],
    blue = colors[2],
    white = colors[3];

console.log(red, green, blue, white); //output: red green blue white
