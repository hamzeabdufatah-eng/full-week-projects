  //basic creating objects

//object literal //qaabkan iyo qaabka hoosaa loo abuura objects

// let person={
// name:`xamse`,
// age:26 ,
// job:`developer`
// }

//using constructor //qaybta kalena waaka

//const car= new Object ()

//accesing objects //hada rabtid laba shay inaa accces garayso objectlabo qaab baa loo acces gareyaa tu waata

//dot notation qaabkan weye dhot .notation
//console.log(person.name)

//barket notation waxa loo isticamaala xog dynamic eh ama oo tiro badan ayaa loo istimaalaa

// const proverty=`age`
// console.log(person[proverty])

//modifying object  magici xamse waxa lagu badalay faarax modifying baana maamusha qaabkan
//person.name=`siciid`
//console.log(person)
//add new property hadii aaad wax kuso diri rabto add new property qaabkana loo isiticmalaa
// person.job=`software dev`
//console.log(person)

//const books = {
//title: `javascript`,
//author: `mustaf`, 
//page: 167,
//}
//for (let key in books ){//halkan waxa loo yaqaanaa for in waa key yada itus objects waa lagu loop gareeyaa (dulwareeg)
//  console.log(key)
//}

//qaabkana waa loo saasaar key yada dhan in lagu soo saaro
// const key=Object.keys(books)
// console.log(key)

//qaabkana valuse ka kaiya lagu helaa keys la aan kaliya values isoo saar weye
// const values=Object.values(books)
// console.log(values)

//qaabkan entires waa dhamaan key ga iyo values ga oo isoo daabc soo bandhigayo
// const entries=Object.entries(books)
// console.log(entries)

// let dukaan={
//   magaca:`adeeg sahal`,
//   goobta:`muqdisho`,
//   shaqaalaha:`5`
// }

// for(let key in dukaan ){
//   console.log(key)
// }
// let key=Object.keys(dukaan)
// console.log(key)

// let values=Object.values(dukaan)
// console.log(values)
// let entries=Object.entries(dukaan)
// console.log(entries)

// let arday=[ //QAABKAN waxa lagu soo saaraa ardaygaa rabto magicis iyo darajadiisa
//   {
//   magaca:`xamse`,
//   darajada:`A+`},
//   {
//   magaca:`axmad`,
//   darajada:`A-`
// }]
// console.log(arday[1].magaca)
let students = [
  {
    name: "hamza",
    grade: `A+`,
    student: `hrm`,
    Number: 500,
  },
  {
    name: "axmad",
    grade: "B+",
    student: `hrm`,
    Number: 300,
  },
  {
    name: "ome",
    grade: "B+",
    Number: 500,
    student: `IT`,
  },
];
let ardayda={...students}
console.log(ardayda)
// let arday=ardayda.forEach(arday=>{
//   console.log(`${arday.Number}`)
// })
// let totalNumbers=student.reduce((sum,student)=>sum+student.Number,(0))
// console.log(totalNumbers)
// students.forEach(student=>{
//   console.log(`${student.name}:${student.grade}`)
// })

// let iisoobix=ardayda.includes((acc,num)=>{
//   return acc+num
// },0)
// console.log(numbers);
// let person = {
//   name: "hamza",
//   age: 20,
//   city: "jigjiga",
//   country:"ethiopia",
// };

// console.log(person.hasOwnProperty("name"))
// console.log(Object.keys(person))  //key soon bandhig kaliaya
// // console.log(Object.values(person))//values kaliya so bandhig
// console.log(Object.entries(person))//key iyo value ba soo bandhig
// for(let key in person){ //waxay ku wareegta object ga
//   console.log(Key)
// }

//console.log(person.hasOwnProperty("name")) //hubiya property gan inuu jiro
//  let newPerson=Object.assign({},person) //object ga nuqul bay usamaysa
// let newPerson={...person};//sidoo kale object ga nuqul bay usameysa yacni way cop yaysaa sida ta kore kuxigta
// Object.freeze(person)//tani wa freeze waxba hakabadlin object ga weye tusaale dada iyocity wanbadalay hoos lkn  maso qabaanayso ta danbe
// person.age=25;
// person.city="xamar";
// console.log(person)
