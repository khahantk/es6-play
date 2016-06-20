//we can be using export keyword when declare variable,
// constant, class, function on TOP SCOPE
export const PI = Math.PI;
export const ERROR_MESSAGE = 'Invalid number';
export let defaultValue = 1;
export function sum(a, b){
    return a + b;
};
export class Calculator{
   init(){
       console.log('init calcultor');
   }
}
//WE can declare before, then export later
function multiple(a, b){
    return a*b;
}
function devide(a, b){
    return a/b;
}
function increaseOne(a){
    return a + 1;
}
function subtract(a, b){
    return a-b;
}

//export multiple
export {multiple, subtract, devide};
//renaming exports
export {increaseOne as increase1}
//export default
export {Calculator as default};
