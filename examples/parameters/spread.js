//spread operator
let sum = function(num1, num2, num3){
    return num1 + num2 + num3;

};
//we can pass parameter as normally
sum(10, 20, 30); //ouput: 60

//in ES6, we can pass an array to the function has multiple parameters
// This call SPREAD OPERATOR
let numbers = [10, 20];
sum(...numbers);