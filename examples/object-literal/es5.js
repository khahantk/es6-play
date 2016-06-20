var person = {
  name: 'John Doe',
  sayHello: function(){
    return 'Hello: ' + this.name;
  },
  anotherMethod: function(param1, param2){
    console.log('another method call'); 
  }
  /* add more method here */
};

console.log(person.name); //output: John Doe
console.log(person.sayHello());  //output: Hello: John Doe

//dynamic and computed object property and method
var age = 'age';
person[age] = 20;

person['newmethod'] = function(){
  console.log('this is new method');
};

console.log(person['age']); //ouput: 20
person['newmethod']();
