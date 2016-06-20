
let talk = Symbol('talk');
let move = 'move';
class Dog{
    constructor(){}
    [talk](){
        console.log('talking');
    }
    [move](){
        console.log('moved');
    }
    [Symbol.iterator](){
        return {
            next(){
                let rand = Math.round(Math.random()*10);
                return {value: rand, done: false}
            }
        }
    }
    //add more method
}

let d = new Dog();
d.move(); //output: moved
d[talk](); //output: talking

var iterator = d[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
