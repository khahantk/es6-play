function countdown(max) {
    return {
        next(){
            if(max>0){
                return {value: max--, done: false}
            }else{
                return {value: undefined, done: true}
            }

        }
    }
}


let iter = countdown(3);

console.log(iter.next()); //output: { value: 3, done: false }
console.log(iter.next()); //output: { value: 2, done: false }
console.log(iter.next()); //output: { value: 1, done: false }
console.log(iter.next()); //output: { value: undefined, done: true }
console.log(iter.next()); //output: { value: undefined, done: true }
