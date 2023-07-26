var f =() => {}
var f1= () => 1;
console.log(f1()); 

// function f2(){
//     return  function () {

//     }
// }
 // above f2 can be written in this way as well 
var f2 = () => () =>{ return 2}
// can also be written as ->
var f2 = () =>() => 2;

console.log(f2());
//output  :  () => {return 2};

console.log(f2()());

var f3 =() => () => () => 3;

console.log(f3()()());