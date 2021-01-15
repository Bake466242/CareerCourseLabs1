// let kids = [
//     {name: 'Sage', gender: 'female', age: 20 },
//     {name: 'Noah', gender: 'male', age: 17 },
//     {name: 'Henry', gender: 'male', age: 11 },
// ]

// console.log (kids.filter(kid => kid.age < 18))

//------------------------------------------------------------------------

// //.sort() 

// let family = [
//     {name: 'Sage', gender: 'female', age: 20 },
//     {name: 'Noah', gender: 'male', age: 17 },
//     {name: 'Henry', gender: 'male', age: 11 },
//     {name: 'Todd', gender: 'male', age: 45 },
//     {name: 'Meghann', gender: 'male', age: 43 },
// ]

// let sortedArray = family.sort((a,b) => (a.name > b.name) ? 1 : -1) //ternary

// console.log(sortedArray)

//------------------------------------------------------------------------
//.forEach

// let family = [
//     {name: 'Sage', gender: 'female', age: 20 },
//     {name: 'Noah', gender: 'male', age: 17 },
//     {name: 'Henry', gender: 'male', age: 11 },
//     {name: 'Todd', gender: 'male', age: 45 },
//     {name: 'Meghann', gender: 'female', age: 43 },
// ]


// family
// .filter(person => person.age < 21) //chain
// .forEach(member => {
// let prefix = (member.gender === 'male') ? 'sir' : 'lady' 
// let greeting = `Hello ${prefix} ${member.name}`
// console.log(greeting)
// })

// family.forEach(member => {
//     if(person.age < 21) {
//     let prefix = (member.gender === 'male') ? 'sir' : 'lady' 
//     let greeting = `Hello ${prefix} ${member.name}`
//     console.log(greeting)
//     }
//     })

//------------------------------------------------------------------------
//.map -want a new full array with different shape, get new info from the data provided

let family = [
    {name: 'Sage', gender: 'female', age: 20 },
    {name: 'Noah', gender: 'male', age: 17 },
    {name: 'Henry', gender: 'male', age: 11 },
    {name: 'Todd', gender: 'male', age: 45 },
    {name: 'Meghann', gender: 'female', age: 43 },
]

//I want each persons name and birth year

let newFam = family.map(member => {
let born = 2020 - member.age
return {
    name: member.name,
    born: born
 }
})
console.log(newFam)

