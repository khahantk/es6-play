//Using ES5 function syntax
var person = {
    hello: 'Hello ',
    sayHelloAll: function(){
        var names = ['John Doe', 'Jane Doe'];
        names.map(function(item){
           //console.log(this); //Result: window    Expected: current object
           console.log(this.hello + ' ' + item); //Result: undefined John Doe  Expected: Hello John Doe
        });
    }
};
person.sayHelloAll();

//Using ARROW FUNCTION ES6
var person2 = {
    hello: 'Hello ',
    sayHelloAll: function(){
        var names = ['John Doe', 'Jane Doe'];
        names.map((item)=>{
            //console.log(this); //current object
            console.log(this.hello + ' ' + item); //Result: Hello John Doe  Expected: Hello John Doe
        });
    }
};
person2.sayHelloAll();



