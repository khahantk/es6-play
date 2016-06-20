const p = new Promise(function(resolve, reject){
    //do an async task
    //do an async task
    if(false/* good condition */){
        resolve("success");
    }else{
        reject('error message');
    }
});

p.then(value=>{
    console.log(value);
}, error=>{
    console.log("Rejected: " + error);
}).then(value=>{
  console.log('message');
})
.catch(err=>{
console.log(err);
})