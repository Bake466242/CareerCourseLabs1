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
//   const painterList = painters.filter(painter => painter.born < 1900);
//   console.table(painterList)


  // 2. give list of painters names and last names 

  
// function painterName(first, last){
//     //let painter = first ++ last
//     return console.log(`${first} ${last}`)
// }
// painterNames(painters.name, painters.lastName)


  
  // 3. sort painters alphabetically by last names

// const painterList = painters.sort(function (last)) {
    
//     return
// }

  // 4. give list of painters that names or last names start with K?
  


  // 5. print names of painters that that are still alive
  // and their current age

  const isAlive = painters.filter (painter => !painter.passed)
  const theirAge = isAlive.map (artist => { 
    var today = new Date().getFullYear()
    var age = today - artist.born
    return `${artist.name} is ${age}`
  })
  console.log(theirAge)

  
  // 6. give list of painters that contain 'li' in their name 
  

  // 7. sort painters by birth date, from oldest to youngest
  
  
  
  
  