"use strict"
//Function declaration
function calculateTotalPrice(allItems) {
    let total = 0;
    for (let item in allItems) {
        total += allItems[item];
    }
    return `The total price of your items is $${total.toFixed(2)}.`;
}
//Object with items in cart
let cartForParty = {
    beers: 4.92,
    chips: 1.78,
    popcorn: 2.19,
    whiskey: 10.77,
    cola: 3.23
}
//Calling the function
calculateTotalPrice(cartForParty);
