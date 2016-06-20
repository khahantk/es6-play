var sum = function(initValue, ...numbers){
    var total = initValue;
    numbers.forEach(number=>total = total+number);
    return total;
}

console.log(sum(10, 20)); //ouput: 30
console.log(sum(10, 20, 30)); //ouput: 60
console.log(sum(10, 20, 30, 40)); //ouput: 100
