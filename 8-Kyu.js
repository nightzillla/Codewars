// Training JS #1: create your first JS function and print "Hello World!"
//
// helloWorld = function() {
//     var str = "Hello World!";
//     console.log( str );
// }
//***********************************************************************************************************************
// Training JS #2: Basic data types--Number
// var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
// function equal1(){
//     var a=v1;
//     var b=v1;
//     return a+b;
// }
// //Please refer to the example above to complete the following functions
// function equal2(){
//     var a=v3;
//     var b=v1;
//     return a-b;
// }
// function equal3(){
//     var a=v1;
//     var b=v5;
//     return a*b;
// }
// function equal4(){
//     var a=v4;
//     var b=v5;
//     return a/b;
// }
// function equal5(){
//     var a=v6;
//     var b=v3;
//     return a%b;
// }
//***********************************************************************************************************************
// Find the first non-consecutive number [1,2,3,4,6,7,8,9]
function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr [i + 1];
        if (current + 1 !== next) {
            return next;
        }
    }
    return null;
}