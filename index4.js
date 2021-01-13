// function greaterNum (numOne, numTwo){
//     if (numOne > numTwo){
//         console.log(`The greater number of ${numOne} and ${numTwo} is ${numOne}`)
//     return
//     } else {
//         console.log(`The greater number of ${numOne} and ${numTwo} is ${numTwo}`)
//     }
// } 

// greaterNum(10, 20)
// greaterNum(90, 2)

// function helloWorld(language){
//     if (language == 'en'){
//         console.log ('Hello, World!')
//     } else if (language == 'es'){
//             console.log ('¡Hola Mundo!')
//     } else if (language == 'fr'){
//         console.log ('Bonjour le monde!')
//     } else {
//         console.log ('Hello, World!')
//     }
// }

// helloWorld('fr')

function assignGrade(grade){
    if (grade >= 90){
        console.log (`You got an A!`)
    } else if (grade >= 80){
        console.log (`You got a B!`)
    } else if (grade >= 70){
        console.log (`You're average`)
    } else if (grade >= 60){
        console.log (`Oh noooo`)
    } else if (grade <= 59){
        console.log (`You failed`)
    } else {
        console.log(`You didn't turn in your assignment`)
    }
}

assignGrade(91)
