var submit;
function resetForm(){
    console.log('reset form');
}

submit();  //TypeError: submit is not a function
// This is OK, because function resetForm is hoisting
// to the TOP of SCOPE
resetForm();

submit = function(){
    console.log('submit form');

}
