
let person={
    name:"hamze",
    age:20,
    city:"jigjiga",
    country:"ethiopia",
}

//1 property helid
// console.log(person.name)
// console.log(person["age"])

//2 property kudarid
// person.study="it"
// console.log(person)

//3 propertry badalid
// person.age=23
// console.log(person.age)

//4 property tirtirid
// delete person.city
// console.log(person)

//5 object key  soo saara magacyada propertieska
// console.log(Object.keys(person))

//6 object value
// console.log(Object.values(person))

//7 object entries  values iyo key soo bandhig labadaba
// console.log(Object.entries(person))

//8 for...in soo bandhig key yada waxayna kuwareegta wa  loop propertieska objectga kujira
// for (let key in person){
//     console.log(key)
// }

//9 hasOwnProperty   hubiya propertyga inuu jiro
// console.log(person.hasOwnProperty("name"))

//10 object assign object nuqul usameya
// let newPerson=Object.assign({},person)
// console.log(newPerson)

//11 spread object (...) tanaa ugu fudu wa copy past tii kore ee ssign iyo tan wa isku mid
// let newPerson={...person}
// console.log(newPerson)

//12 object freeze kadip lama badali karo object ga hadaa freeze siiso
// Object.freeze(person);

//tusale
// person.age=22;// dadii hore isbadali mayso 
// person.name="abdi"//sido kale magaca isbadli maayo
// console.log(person)

//13 object seal property cusub laguma dari karo lkn kuwi hore wa waa laga badbadli karaa
//Object.seal(person)

// tussale
//person.study="srs";//tan marnaba kuma darsamayso person object ga
//person.age=22 //lkn dada waxbaan kabadalay
//console.log(person)