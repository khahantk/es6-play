
function* simpleGenerator() {
    var i = yield 1;
    // pause
    yield 2;
    // pause
    yield 3;
    console.log("i = " + i);
}
let mygen = simpleGenerator(); // [object Generator]
//console.log(mygen[Symbol.iterator]); //[Function: [Symbol.iterator]]
for(let value of mygen){
    console.log(value);
}

console.log(mygen.next()); // Object {value: 1, done: false}
console.log(mygen.next()); // Object {value: 2, done: false}
console.log(mygen.next()); // Object {value: 3, done: false}
console.log(mygen.next()); // Object {value: 'done?', done: false}
console.log(mygen.next()); // Object {value: undefined, done: true}
console.log(mygen.next()); // Object {value: undefined, done: true}

for (let val of simpleGenerator()) {
    console.log(val); // 1
                      // 2
                      // 3
                      // 'done?'
}
