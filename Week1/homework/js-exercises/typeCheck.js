"use strict";
//Declare variables
let str1 = "Windows";
let str2 = "Linux";
let obj1 = { name: "Bill", surname: "Gates" };
let obj2 = { name: "Linus", surname: "Torvalds" };
//Check data type
console.log(typeof str1);
console.log(typeof obj1);
//Conditional statements
if (typeof (str1) == typeof (str2)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
if (typeof (str1) == typeof (obj1)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
if (typeof (str1) == typeof (obj2)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
if (typeof (str2) == typeof (obj1)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
if (typeof (str2) == typeof (obj2)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
if (typeof (obj1) == typeof (obj2)) {
    console.log("SAME");
} else {
    console.log("NOT THE SAME");
}
//Alternative solution
console.log("ALTERNATIVE SOLUTION")
function compareDate(a, b) {
    if (typeof (a) === typeof (b)) { return "SAME" }
    return "NOT THE SAME"
}
console.log(compareData(str1, str2));
console.log(compareData(str1, obj2));
//END OF CODE

