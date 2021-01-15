//Write a function named tellFortune that takes 4 arguments and outputs on the screen 3 times

// function tellFortune(children, partner, location, job){
//     let fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids`
//     return console.log(fortune)
// }

// tellFortune(0, 'Sam', 'England', 'Software Engineer')
// tellFortune(1, 'Mary', 'Florida', 'Manager')
// tellFortune(2, 'Victoria', 'Portland', 'Snake Tamer')



//write a function names calculateDogAge that takes 1 argument  and calculates your dogs age based on the conv rate
//1 human year to 7 dogs years out outputs as stated

function calculateDogAge(dogAge, humanAge){
    let age = dogAge * 7
    return console.log(`Your doggie is ${age} years old in dog years and is ${humanAge} in human years`)
}

calculateDogAge(2, 2)
calculateDogAge(3, 3)
calculateDogAge(10, 10)