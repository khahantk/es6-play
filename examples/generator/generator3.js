/*
Two way communication
 */

function* generator() {
    var bar = yield 'foo';
    console.log(bar); //output: hello world
}

const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // foo
// Resume execution injecting 'hello world'
const nextThing = iterator.next('hello world');
console.log(nextThing);
/*
---output -----

 foo
 hello world

 */
