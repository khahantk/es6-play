/*
 This is an feature ES6
 using the keyword let
 Using declare variable that DOES NOT HOIST (MOVE) TO TOP SCOPE and
 CREATE A BLOCK SCOPE
 Avoid redeclare variable
 */


for(let i = 0; i < 3; i++){
    let test = 10;
    if(true){
        let language = 'Javascript ES5';
    }
}
//ReferenceError: i is not defined
console.log("i: " + i);
//ReferenceError: test is not defined
console.log("test: " + test);
//ReferenceError: language is not defined
console.log("language: " + language);




//Example 1
console.log('=== Example 1 ====');
for(let i = 0; i < 3; i++){
    console.log(i);
    let test = 10;
}
//console.log("variable i in outside for: " + i); //ReferenceError: i is not defined
//console.log("variable test in outside for: " + test); //ReferenceError: test is not defined


//Example 2
console.log('=== Example 2 ====');
let x = 1;
console.log(x); // 1
if (1===1) {
    let x = 2;
    console.log(x); // 2
}
console.log(x); // 2


//Example 3
console.log('=== Example 3 ====');
let foo = 1;
function bar() {
    if (!foo) {
        let foo = 10;
    }
    console.log(foo);
}
bar();
console.log(foo);


//Example 4
console.log('=== Example 4 ====');
function showLoop(){
    for(let j = 0; j < 3; j++){
        console.log(j);
        var let = {age: 10};
    }
}

showLoop();
// console.log("variable j in outside for of showLoop: " + j);  //ReferenceError: i is not defined
// console.log("variable user in outside for of showLoop: " + user);  //ReferenceError: i is not defined




