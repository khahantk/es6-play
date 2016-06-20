//Using ARROW FUNCTION ES6
var person2 = {
    hello: 'Hello ',
    sayHelloAll: function(){
        var names = ['John Doe', 'Jane Doe'];
        names.map((item)=>{
            //console.log(this); //current object
            console.log(this.hello + ' ' + item); //Result: Hello John Doe  Expected: Hello John Doe
            var colors = ['red', 'green', 'blue'];
            colors.forEach(color=>{
                console.log(this.hello); //output: Hello -- Expected: Hello
                setTimeout(()=>{
                    console.log(this.hello); //output: Hello -- Expected: Hello
                    
                }, 100);
            });
        });
    }
};
person2.sayHelloAll();