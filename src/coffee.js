// const coffees = require('../data/coffee.json')

// exports.funcName = function(args){ }

// exports.funcName = (args) => { }
 
// //destructure
// const {doSomething, ...} = require('./funclist.js')
const { getRecipe, printRecipe } = require('./helpers/friends')
const myCoffee = 'Latte'
const myRecipe = getRecipe(myCoffee)
printRecipe(myCoffee, myRecipe)




