"use strict"
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
myString = myString.split(",").join(" ");
console.log(myString);