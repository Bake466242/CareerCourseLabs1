const coffees = require('../data/coffee.json')
/*
{
    "title": "Black",
    "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    "ingredients": [
      "Coffee"
    ],
    "id": 1
  }
*/

// let milkyCoffees = coffees.filter(recipe => {
//    return recipe.ingredients.includes('Milk')
// })


//let milkyCoffees = coffees.filter( recipe =>recipe.ingredients.includes('Steamed Milk') )

// coffees.forEach(recipe => {
// if(recipe.ingredients.includes('Steamed Milk')
// || recipe.ingredients.includes('1oz Steamed Milk')){
//     console.log(recipe.id, recipe.title)
// }
// })

coffees.forEach(recipe =>
    recipe.ingredients.includes('Steamed Milk') && console.log(recipe.title))
