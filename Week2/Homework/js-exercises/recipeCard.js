"use strict"

//Variable declaration.
const myRecipe02 = {
    title: "Pizza",
    servings: "1",
    ingredients: [
        "flour", "milk", "tomato", "cheese", "peperoni", "bacon", "mushroom",
    ]
}
//Loop that iterates through the object.
for (let key in myRecipe02) {
    //If statements logging the value of each key.
    if (myRecipe02[key] === myRecipe02["title"]) {
        console.log(`Meal name: ${myRecipe02[key]}`);
    }
    else if (myRecipe02[key] === myRecipe02["servings"]) {
        console.log(`Serves: ${myRecipe02[key]}`);
    }
    else {
        console.log(`Ingredients: `);
        for (let i = 0; i < myRecipe02.ingredients.length; i++) {
            console.log(myRecipe02[key][i]);
        }
    }

}


