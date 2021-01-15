const painters = [
    { name: 'Pablo', lastName: 'Picasso', born: 1881, passed: 1973 },
    { name: 'Salvador', lastName: 'Dali', born: 1904, passed: 1989 },
    { name: 'Frida', lastName: 'Kahlo', born: 1907, passed: 1954 },
    { name: 'Henri', lastName: 'Matisse', born: 1869, passed: 1954 },
    { name: 'Gustav', lastName: 'Klimt', born: 1862, passed: 1918 },
    { name: 'Jackson', lastName: 'Pollock', born: 1912, passed: 1956 },
    { name: 'Judy', lastName: 'Chicago', born: 1939, passed: null },
    { name: 'Kara', lastName: 'Walker', born: 1969, passed: null },
    { name: 'Wassily', lastName: 'Kandinsky', born: 1866, passed: 1944 },
  ];
  
  // 1. give list of painters that were born in the 19 century
  // const painterList = painters.filter(painter => painter.born < 1900);
  // console.table(painterList)


  // 2. give list of painters names and last names 

  // let newArray = painters.map(painter => {
  //   return {
  //       name: painter.name,
  //       last: painter.lastName
  //    }
  //   })
  //   console.log(newArray)
    

  // 3. sort painters alphabetically by last names

  // let sortedArray = painters.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1) //ternary

  // console.log(sortedArray)

  // 4. give list of painters that names or last names start with K?
  
  // const namesK = painters.filter(painter => painter.name.startsWith('K') || painter.lastName.startsWith('K') );

  // console.log(namesK);


  // 5. print names of painters that that are still alive
  // and their current age

  // const isAlive = painters.filter (painter => !painter.passed)

  // const theirAge = isAlive.map (artist => { 
  //   //var today = new Date().getFullYear()
  //   var age = new Date().getFullYear() - artist.born
  //   return `${artist.name} is ${age}`
  // })
  // console.log(theirAge)

  
  // 6. give list of painters that contain 'li' in their last name 

  //  const namesLi = painters.filter(painter => painter.lastName.includes('li') );

  //   console.log(namesLi);
  

  // 7. sort painters by birth date, from oldest to youngest
  
//   let sortedArray = painters.sort((a,b) => (a.born > b.born) ? 1 : -1) //ternary

// console.log(sortedArray)
  
// 8. give list of strings of artists and their age when died or current if still alive
 // ex: 'Gustav Klimt was 56 when passed', 'Kara Walker is 52'

//  let newPainters = painters.map(painter => {
//     if (painter.passed == true){
//         `${painters.name} ${painters.lastName} was ${age} when passed`
//     } else{
//         `${painters.name} ${painters.lastName} is ${age}`
//     }
//         })
//         console.log(newPainters)




// painters.forEach(member => {
// let prefix = (member.gender === 'male') ? 'sir' : 'lady' 
// let greeting = `Hello ${prefix} ${member.name}`
// console.log(greeting)
// })
  
  