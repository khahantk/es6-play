//example 1
var initPage = function(pageId){
  //jQuery(pageId).somefunction();
}
//example 2
var total = 0;
[1, 2, 3].forEach(function(number){
    total = total + number;
});
console.log(total); //output: 6

//example 3
[1, 2, 3].map(function(number){
   return number*2;
});

