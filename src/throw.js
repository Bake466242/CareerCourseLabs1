function crazy(){
    throw 'What Now'
}
function awesome(){
    return true
}

try {
let plop = crazy()
let fizz = awesome()
}
catch(error){
    console.log('we got an error: ', error)
}