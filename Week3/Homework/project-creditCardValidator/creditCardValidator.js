"use strict"

function creditCardValidator(num) {
    //Variables declaration. numToString variable turns number into string
    let numToString = num.toString();
    let valid = "is a valid number!"
    let invalid = "is an invalid number."

    //If statements for each rule:

    //Number must contain 16 digits
    if (numToString.length > 16 || numToString.length < 16) {
        return `${num} ${invalid} Number must be 16 digits long`;
        //Number must only numbers not other characters
    } else if (isNaN(parseInt(numToString))) {
        return `${num} ${invalid} Number contains invalid characters`;
        //All digits cannot be the same
    } else if (allEqual(numToString) === true) {
        return `${num} ${invalid} All of the digits cannot be the same`;
        //Last digit must be an even number
    } else if (parseInt(numToString.slice(-1)) % 2 !== 0) {
        return `${num} ${invalid} Last digit must be even`;
        //The sum of all the digits must be greater than 16
    } else if (addDigits(numToString) < 16) {
        return `${num} ${invalid} The sum of all the digits must be greater than 16`;
        //Message when number is valid
    } else { return `${num} ${valid}` }

    //Functions

    //Adds the digits of the number one by one
    function addDigits(val) {
        let sum = 0;
        for (let i = 0; i < val.length; i++) {
            sum += parseInt(val[i]);
        }
        return sum;
    }

    //Checks if all digits are equal
    function allEqual(val) {
        let result;
        for (i = 0; i < val.length; i++) {
            result = val[0] === val[i];
        }
        return result;
    }
}

