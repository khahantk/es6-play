//Hello promise
const promise = new Promise(function(resolve, reject){
    setTimeout(
        resolve('Hello Promise'),
        1000
    );
});


promise.then(function(value){
   console.log(value); //output: Hello Promise
});
