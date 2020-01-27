"use strict"
function addToShoppingCart(item) {
    shopList.push(item);
    if (shopList.length > 3) {
        shopList.shift();
    }
    return `You bought ${shopList.join(", ")}`;
}
let shopList = ["bananas", "milk"];

console.log(addToShoppingCart("eggs"));
console.log(addToShoppingCart("bread"));
console.log(addToShoppingCart("lettuce"));
