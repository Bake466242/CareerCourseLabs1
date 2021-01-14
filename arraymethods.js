// let kids = [
//     {name: 'Sage', gender: 'female', age: 20 },
//     {name: 'Noah', gender: 'male', age: 17 },
//     {name: 'Henry', gender: 'male', age: 11 },
// ]

// console.log (kids.filter(kid => kid.age < 18))

//.sort() 

let family = [
    {name: 'Sage', gender: 'female', age: 20 },
    {name: 'Noah', gender: 'male', age: 17 },
    {name: 'Henry', gender: 'male', age: 11 },
    {name: 'Todd', gender: 'male', age: 45 },
    {name: 'Meghann', gender: 'male', age: 43 },
]

let sortedArray = family.sort((a,b) => (a.name > b.name) ? 1 : -1)

console.log(sortedArray)