// creating arrays

// let fruits = [`apple`, `banana`, `orange`]; //qaabksn iyo qaabkaas kalaa loo declare gareya
// let numbers= new Array(1,2,3)                //qabkan wa loyaqaanaa constractor
// accessing  and moffying elements //elements waxa lo yaqanaa sida apple 1 banana camal
// console.log(fruits )

// modifying //qaabkan waa modifyng
//fruits[1]=`canbe`;
//console.log(fruits)

//array methods
// fruits.push(`cinab`)//push waa wax kusii dar value eh  meeshu ugu danbaysa
// console.log(fruits)
// fruits.pop() //pop waxbay kasaartaa value gaaga aarabto inaa kasaarto gadaal ayayna kasaartaa
// console.log(fruits)

// fruits.shift()//shift hortay kasaartaa value ga
// console.log(fruits)
//fruits.unshift(`bariis`)
//console.log(fruits)

//modfy and removing
 
//splice //js splice waxay usiticmasha inaaad wax kaga saarta valuese kaaga
//let removedLetters=letters.splice(1,2)
//console.log(`removedLetters,`,removedLetters)
// console.log(`letters`,letters)

//  slice get data portion withoud modifying  slice waxa loo isticmaala  in value ga aa rabto kusoo bandhigo kutuso camal
//let portion= letters.slice(0,3)
//console.log(`letters`, letters)

// iteration methods forEach, map,filter,reduce

// forEach
//numbers.forEach(num=>{ //for each num wixi kujiro ayaya soo bandhigtay eeg
//  console.log(num *2)//*2 waxayn kadhigantahay mid kaste 2 kudhufo
//})

//map waa new array isoo bandhig
//let newNembers=numbers.map(num=>num)
//console.log(newNembers)

//filter //filter wa shaandhayn tirada kinzi isoo saar camal  kinsi waa 2 4 8 10 tiro walbo qqaybsanta rimayndhar keeda ama hadahaaga eber uunodo
// let dhaban=numbers.filter(num=>num%2==0)
// console.log(dhaban)

// let dhaban=no.filter(num=>num>2)
// console.log(dhaban)

//reduce  // waxba lagu xisabiya colculation ahaan ayaya wax loogu xisabiya

// let numbers=[1,2,3,4]
// const sum=numbers.reduce((acc,num)=>{
//     return acc+num
// },0)
// console.log(sum)

//searching find indexoff include

//  const fruits=[`banana`,`cinab`,`moos`,`xamse`]
// const newFruits=fruits.find(fruit=>fruit.length===5)
//console.log(newFruits)
//find waxbaa lagu helaa tusaalehana waaka 5 xarfood cinab  ayaa wata saa darted wa laso abdnhigay
//const newFruits=fruits.find(fruit=>fruit.length===5)
//console.log(newFruits)

//indexoff   wax lagu baaraa value ga lambarku jiro tusal moos ka 2 ayuu kujira
//console.log(fruits.indexOf(`moos`));

//include waxa loo baara war meeshan value ga mkujira maya mise haa tusaale waaka boolean ayay soo saartaa sida ture ama false
//console.log(fruits.includes("tufaax"))

// console.log(fruits.includes(`moos`)); kanna waa true ayaa ladhahay sida waa include

//hi the world















