let countdown = function(max){
    return {
        [Symbol.iterator](){
            return { //return an iterator object with an next method
                next(){
                    if(max>0){
                        return {value: max--, done: false}
                    }else{
                        return {value: undefined, done: true}
                    }

                }
            }
        }

    }
}

let mycountdown = countdown(3);

for(let value of mycountdown){
    console.log(value); //output: 3  2  1
}
/*
let iter = mycountdown[Symbol.iterator]();
console.log(iter.next()); //output: { value: 3, done: false }
console.log(iter.next()); //output: { value: 2, done: false }
console.log(iter.next()); //output: { value: 1, done: false }
console.log(iter.next()); //output: { value: undefined, done: true }
console.log(iter.next()); //output: { value: undefined, done: true }
*/
