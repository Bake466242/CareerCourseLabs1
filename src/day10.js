
function printLetter(){
    a = 1
    //function scope 
    console.log(a) 
    if(a === 1){
        let b = 2
        console.log({b})
    } else{
        let c = 3
        console.log({c})
    }
}
printLetter()


let dog = 'addie'
if (true){
    dog = 'maddie'
}

console.log(dog)
















// function getName(callback){
//     var name = ('Bobby')
//     callback(name)
//     }
//     getName(res => console.log('Hello', res))

//let beefStack = [beef, beef2, beef3]

// function getBeef(){
//     return new promise((resolve, reject) => {
//     if(beefStack.length){
//         resolve(beefStack.pop())
//     } else {
//         reject('no beef!')
//     }
//     })
// }

// async function getRecipe(CoffeeName){
//     await let myRecipe =
//     return myRecipe.ingrediants 
// }
    