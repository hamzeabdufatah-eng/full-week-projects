// let fruits = ["apple", "banana", "mango"];

//1 element helid
// console.log(fruits[0])
// console.log(fruits[1])

//2 length tirada elements ka
// console.log(fruits.length)

//3 push () dhmaadka ayuu kadaraa
// fruits.push("orange")
// console.log(fruits)

//4 pop () kan ugu danbeeya ayuu tirtiraa elements ka
// fruits.pop()
// console.log(fruits)

//5 unshift () biloowga ayuu kudaraa elemnt cusub hada rabto
// fruits.unshift("grape")
// console.log(fruits)

//6 shift () kan ugu horeeya ayuu tirtira
// fruits.shift()
// console.log(fruits)

//7 indexOF () index ka ayuu soo celiyaa banana lamabarku kujir yacni
// console.log(fruits.indexOf("banana"))

//8 includes () hubiyo inuu jiro
// console.log(fruits.includes("mango"))

//9 slice () qayb ayuu kaso gooyaa isagooon array badellin tusale 0,2 inta udhaxayso ayuu copy kuso dhihi yacni 0 ilaa 3 hada rabto xata
// console.log(fruits.slice(0,2))

//10 splice () tirtirid ama kudarid  0 ilaa ... tirada doonto ayaa ku baabini kartaa
//tusaale tirtid
// fruits.splice(0,2)
//tusaale kudaris
// fruits.splice(1,0,"orange")
//tusaale kubadlid eh
// fruits.splice(1,1,"avocado")
// console.log(fruits)

//11 for loop array ga ayuu kuwareegaa
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//12 for...of si fudud ayuu ugu wareegaa
// for (let fruit of fruits){
//     console.log(fruit)
// }

//13 jion () arryga ayuu string kadhiga
// console.log(fruits.join("-"))

//14 reverse () kala danbaynta walxaha ayuu rogaa kii ugu danbeya so hormara
// fruits.reverse()
// console.log(fruits)

//15 sort () kal hormarin ayuu sameeya
// fruits.sort()
// console.log(fruits)

//16 concat ()  laba array ayuu iskudaraa  tusaale cad waa ka hoose
// let moreFruits=["mango","grapes"]
// let allFriuts=fruits.concat(moreFruits)
// console.log(allFriuts)

//17 map () array cusub ayuu so saaraa ama fartaa lagu waawayneeya
// let UpperFriuts=fruits.map(fruit=>fruit.toUpperCase())
// console.log(UpperFriuts)
//tusaale kale oo numbers eh
// let numbers=[1,2,3]
// let result=numbers.map(num=>num*2)
// console.log(result)

//18 filter () shruud buuxiyayaasha ayuu so saara 2 tusaale wakuwa
//tusaale ha koowad 
// let longFriuts=fruits.filter(fruit=>fruit.length>5)
// console.log(longFriuts)
//tusaale number eh
// let numbers=[1,2,3,4,5]
// let even=numbers.filter(num=>num%2===0)
// console.log(even)

//19 find () kan ug horeeya ee shuruuda buuxiya ayuu so celiya
//tusaleha koowaad
// let FoundFriuts=fruits.find(fruit=>fruit.startsWith("b"))
// console.log(FoundFriuts)
//tusaleha 2aad numbers
// let numbers=[1,2,3,4]
// console.log(numbers.find(num=>num >2))

//20 reduce () dhamaan qiimayaasha ayuu isu geeya
//tusaaleha koowaad 
// let allFriutsText=fruits.reduce((sentence, fruit)=>{
//     return sentence+","+fruit
// })
// console.log(allFriutsText)
//tusaale numbers eh
// let numbers=[1,2,3,4,5]
// let total=numbers.reduce((sum,num)=>sum +num,0)
// console.log(total)
