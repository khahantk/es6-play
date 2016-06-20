//example 1
var initPage = (pageId)=>{
    //jQuery(pageId).somefunction();
}
//example 2
var total = 0;
[1, 2, 3].forEach((number)=>{
    total = total + number;
});
console.log(total); //output: 6

//example 3
[1, 2, 3].map((number)=>{
    number*2;
});
