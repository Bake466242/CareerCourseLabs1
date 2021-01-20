
const admin = require("firebase-admin");

const serviceAccount = require('../../db-coffee-becca-firebase-adminsdk-14znt-8ee3a77c14.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://db-coffee-becca-default-rtdb.firebaseio.com"
});

const db = admin.database();
//const coffeeList = require('../../data/coffee.json')

exports.getRecipe = function (coffeeName, callback) {
    db.ref('coffees').once("value") 
    .then(snapshot => {
        const coffeeList = snapshot.val()
        const ingredientList = coffeeList.find(coffee => coffee.title === coffeeName).ingredients
        callback(ingredientList) 
    })
    
}

exports.printRecipe = (coffeeName, ingredientList) => {
    console.log(coffeeName + ': ')
    ingredientList.forEach(ingredient => console.log(ingredient))
   
}
