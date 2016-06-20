//class expression named Person2
let Person = class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    static create(name, age){
        return new Person2(name, age);

    }
};

let p = new Person('John Doe', 20);
console.log(p.name); //output: John Doe

let p2 = Person.create('Jane Roe', 20);
console.log(p2.name);
