let dog = {
    name: 'Scully',
    brand: 'corgi',
    size:'small',
    age: 6,
    speak(person){

        (person) 
        ? console.log(`Woof!${person} is home`)
        : this.growl()
    },
    bark(){
        console.log('BARK! BARK!')
    },
    growl(){
        console.log('grrrrrrr!')
    }

}
dog.speak()

