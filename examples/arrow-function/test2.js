//Using ES5 function syntax
var person = {
    hello: 'Hello ',
    sayHelloAll: function(){
        console.log(this.hello);

    }
};
var sayHello = person.sayHelloAll;

sayHello(person);

