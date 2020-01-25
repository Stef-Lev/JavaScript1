"use strict"
//Creating a function with two arguments, "score" and "total".
//e.g. if you got 16 out of 20, score=16, total=20
function yourGrade(score, total) {
    //Converting score into a percentage
    let percent = (Math.floor((score / total) * 100));
    //Declaring the variable for the grade
    let grade;
    //If statements for each score range returning the appropriate phrase
    if (percent <= 100 && percent >= 90) {
        grade = "A";
        return `You got a ${grade} (${percent}%)!`
    }
    else if (percent <= 89 && percent >= 80) {
        grade = "B";
        return `You got a ${grade} (${percent}%)!`
    }
    else if (percent <= 79 && percent >= 70) {
        grade = "C";
        return `You got a ${grade} (${percent}%)!`
    }
    else if (percent <= 69 && percent >= 60) {
        grade = "D";
        return `You got a ${grade} (${percent}%)!`
    }
    else if (percent <= 59 && percent >= 50) {
        grade = "E";
        return `You got a ${grade} (${percent}%)!`
    }
    else {
        grade = "F";
        return `You got a ${grade} (${percent}%)!`
    }

}
//Testing if the function works with console.log
console.log(yourGrade(16, 20));
console.log(yourGrade(7, 10));
console.log(yourGrade(9, 50));