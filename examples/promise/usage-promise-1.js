// create new promise
const p = new Promise(function(resolve, reject){
    console.log('test');
    //a mock async action using setTimeout
    setTimeout(function(){
        if(true){
            resolve("success");
        }else{
            reject('error message');
        }

    }, 2000);
});

//subscribing to the state of promise using .then method of promise object
//syntax: p.then(onFulfilled, onRejected);
//onFulfilled callback function will be called when promise is resolved
//onRejected callback function will be called when promise reject

p.then(function(value) {
    console.log(value); //output: Success
},
function(err){
    console.log(err);
}
);


