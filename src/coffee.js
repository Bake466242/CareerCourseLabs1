// const coffees = require('../data/coffee.json')

// exports.funcName = function(args){ }

// exports.funcName = (args) => { }
 
// //destructure
// const {doSomething, ...} = require('./funclist.js')

// const myCoffee = 'Latte'
// const myRecipe = getRecipe(myCoffee)
// printRecipe(myCoffee, myRecipe)
const { getRecipe, printRecipe } = require('./helpers/friends')
const myCoffee = process.argv[2] || 'Latte'
getRecipe(myCoffee, myRecipe => {
    printRecipe(myCoffee, myRecipe)
})



