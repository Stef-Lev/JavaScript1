"use strict"
function giveCompliment(name) {
    let compliments = ["great", "awesome", "a genius", "brilliant", "simply the best", "irresistibly charming", "so patient", "so smart", "absolutely fantastic", "a rock star"];

    let selectRandom = compliments[Math.floor(Math.random() * compliments.length)];
    return `You are ${selectRandom}, ${name}!`;

}