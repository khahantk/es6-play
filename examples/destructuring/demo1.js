//object destructuring
let person = {
    firstName: 'John',
    lastName: 'Does',
    address: '123 - Street No'
}
/* es5
 var firstName = person.firstName;
 var lastName = person.lastName;
 var address = person.address;
 */

let {firstName, lastName, address} = person;
console.log(firstName, lastName, address);



//array destructuring

var colors = ['red','green', 'blue', 'white'];

var element = document.querySelector('#content');
element.innerHTML = 'Thank You';