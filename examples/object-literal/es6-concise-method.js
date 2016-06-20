//concise method

let person2 = {
    name: 'John Doe',
    sayHello(){
        return 'Hello: '+ this.name;
    },
    anotherMethod(param1, param2){
        console.log('another method call');
    }
    /* add more method here */
};

console.log(person2.name); //ouput: John Doe
console.log(person2.sayHello()); //output: Hello: John Doe
