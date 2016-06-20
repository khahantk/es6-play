class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName){
        var words = fullName.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

let p = new Person('John', 'Doe');
console.log(p.fullName); //output: John Doe