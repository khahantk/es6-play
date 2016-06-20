
//String
let helloworld = 'Hello World';
//helloworld[Symbol.iterator]; //output: [Function: [Symbol.iterator]]
for(var value of helloworld){
    console.log(value); //output: H e l l o  W o r l d
}
//Array
let colors = ['red','green','blue'];
//colors[Symbol.iterator];
for(var value in colors){
    console.log(value); //output: 0  1  2
}

for(var value of colors){
    console.log(value); //output: red  green  blue
}
//Set
let users = new Set(['John Doe', 'Jane Rose', 'John Doe']);

for(var value of users){
    console.log(value); //output: John Doe  - Jane Rose
}
//Map
let options = new Map([ ['yes', 'Yes'],['no', 'No'],['maybe','May Be']]);
for(var value of options){
    console.log(value); //output: [ 'yes', 'Yes' ] - [ 'no', 'No' ], [ 'maybe', 'May Be' ]
}