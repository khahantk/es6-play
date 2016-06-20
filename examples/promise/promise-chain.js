// create new promise
const p = new Promise(function(resolve, reject){
    //a mock async action using setTimeout
    setTimeout(function(){
        if(true){
            resolve(100);
        }else{
            reject('error message');
        }

    }, 2000);
});

p.then(value=>{
    return Promise.resolve(value + 100);
}
).then(value=>{
    return Promise.resolve(value + 100);
}).then(value=>{
    return Promise.resolve(value + 100);
}).then(value=>{
    return Promise.resolve(value + 100);
}).then(value=>{
    console.log(value); //output: 500   - after 2 seconds
});
