
let person = {
    name: 'John Doe',
    age: 20,
    address: 'Street No 1',
    favorite: {
        colors: ['RED', 'GREEN', 'BLUE'],
        sports: ['Swimming']
    }
};

let {name, favorite: {colors}} = person;

console.log(name);  //output: John Doe
console.log(colors); //output: [ 'RED', 'GREEN', 'BLUE' ]
