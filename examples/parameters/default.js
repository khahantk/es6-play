let numArticle = 0;

let inc = function(step = 1){
    numArticle = numArticle + step;
    return numArticle;
}
//we can call inc with no parameter
inc();
//or with one parameter
inc(2);

//parameter with default value MUST in the last
let increaseNumber = function(number, step = 1){
    let result = number + step;
    return result;
}

increaseNumber(10); //output: 11
increaseNumber(10, 2); //output: 12