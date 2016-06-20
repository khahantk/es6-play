/**
 * Created by chung on 6/20/16.
 */
var sum = function(initValue = 1, ...numbers){
    var total = initValue;
    numbers.forEach(number=>total = total+number);
    return total;
}

console.log(sum()); //ouput: 30
console.log(sum(10)); //ouput: 30
console.log(sum(10, 20)); //ouput: 30
console.log(sum(10, 20, 30)); //ouput: 60
console.log(sum(10, 20, 30, 40)); //ouput: 100