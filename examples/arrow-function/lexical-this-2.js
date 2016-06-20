function Person3() {
    this.name = 'John Doe';
    setInterval(function(){
        console.log("Hi " + this.name); //Result: Hi undefined  -   Expected:  Hi John Doe
    }, 1000);
};
var p = new Person3();

function Person4() {
    this.name = 'John Doe';
    setInterval(()=>{
        console.log("Hi " + this.name); //Result: Hi John Doe  -   Expected:  Hi John Doe
    }, 1000);
};
var p = new Person4();
