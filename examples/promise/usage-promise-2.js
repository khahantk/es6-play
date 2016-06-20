/*
2 way to create an promise
 */
// 1: using new keyword
const p = new Promise(function(resolve, reject){
    //do an async task
    //do an async task
    if(true/* good condition */){
        resolve("success");
    }else{
        reject('error message');
    }
});

// 2: Using static method of Promise
const p2 = Promise.resolve(10);
const p3 = Promise.reject("error message");


