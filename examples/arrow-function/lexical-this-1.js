
var person2 = {
    hello: 'Hello ',
    names: ['John Doe', 'Jane Doe'],
    sayHelloAll: function(){
        console.log(this);
        this.names.map(function(item){
            console.log(this); //window
            console.log(this.hello + ' ' + item);
        });
    }.bind(this)
};




person2.sayHelloAll();
console.log('-------------');
var sayHello = person2.sayHelloAll;
sayHello();


