let Person = class{
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
};

let p = new Person('John Doe', 20);
console.log(p.name); //output: John Doe
