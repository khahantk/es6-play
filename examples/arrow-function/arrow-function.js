/**
 * Created by chung on 6/10/16.
 */
/*
Arrow function
Short and sugar syntax to create an function
Implicit return
Parentheses are optional when there's only one parameter
A function with no parameters requires parentheses
 */

var person2 = {
    hello: 'Hello ',
    sayHelloAll: function(){
        var names = ['John Doe', 'Jane Doe'];
        names.map(item=>{
            //console.log(this); //person2
            console.log(this.hello + ' ' + item);
        });
    }
};

person2.sayHelloAll();


let inc = ()=>{

}
let initPage = (a)=>{}



