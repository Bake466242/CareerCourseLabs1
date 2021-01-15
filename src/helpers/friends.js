const coffeeList = require('../../data/coffee.json')

exports.getRecipe = function(coffeeName) {
    // let recipe = coffeeList.find(coffee => coffee.title === coffeeName)
    // return recipe.ingredients
    return coffeeList.find(coffee => coffee.title === coffeeName).ingredients
}

exports.printRecipe = (coffeeName, ingredientList) => {
    console.log(coffeeName + ': ')
    ingredientList.forEach(ingredient => console.log(ingredient))
}
