//Variables
const drinkTypes = ["cola", "lemonade", "water"];
let drinkTray = [];
let index = 0;
//Function to check if the drink is repeated
function isRepeated(drink) {
    return drink === drinkTypes[index]
}
//Loop iterating through the array
for (let i = 0; i < 5; i++) {
    drinkTray.push(drinkTypes[index]);
    if (drinkTray.filter(isRepeated).length === 2) {
        index += 1;
    }
}
//Final console.log
console.log(`Hey guys, I brought a ${drinkTray.join(", ")}!`);

