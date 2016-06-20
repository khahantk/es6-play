//string interpolation
let firstName = 'John';
let lastName = 'Doe';

let hello = `Hello ${firstName} ${lastName}`;
console.log(hello); //output: Hello John Doe

//multiple line string
let hello2 = `
HELLO
${firstName}
${lastName}
`;

console.log(hello2);
/* output
 HELLO
 John
 Doe
 */



