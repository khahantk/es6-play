class Animal{
    move(){
        console.log('moved');
    }
}

function getBase(){
    return Animal;
}

class Dog extends getBase(){

    talk(){
        console.log('talking');
    }
}

let d = new Dog();
d.move(); //output: moved
