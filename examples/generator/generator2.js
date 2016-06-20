/*
One way communication - it's only return values for the iterator
 */
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
    return 'abc';
    yield 2;
}

var iterator = generator(); //it just return an generator object
// This will execute before anything in the generator
// function body executes
console.log('Starting iteration');
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }

/*
 --- output------

 Starting iteration

 Execution started
 { value: 0, done: false }

 Execution resumed
 { value: 1, done: false }

 Execution resumed
 { value: undefined, done: true }

 */
