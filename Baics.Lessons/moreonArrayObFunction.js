const countries = [
  {
    name: "unated state",
    population: 333303038484,
    continent: "north america",
    langauge: "english",
    gdp: 21489586, //in millions usd
    cities: ["new york", "los angeles", "chicago", "washington dc"],
  },
  {
    name: "india",
    population: 4563038484,
    continent: "asia",
    langauge: "india",
    gdp: 3088606,
    cities: ["hydrabad", "mumbai", "kahshmir", "new delhi"],
  },
  {
    name: "brazil",
    population: 893038484,
    continent: "south america",
    langauge: "portuguese",
    gdp: 30489586,
    cities: ["soe polo ", "rio de jeneiro", "brazilia"],
  },
  {
    name: "china",
    population: 409503038484,
    continent: "asia",
    langauge: "china",
    gdp: 38540556,
    cities: ["baijing", "shinhoug", "wuhan", "chichan"],
  },
  {
    name: "germany",
    population: 6503038484,
    continent: "Euorope",
    langauge: "german",
    gdp: 3058489586,
    cities: ["munich", "dortmund", "berlin"],
  },
  {
    name: "somalia",
    population: 13903038484,
    continent: "africa",
    langauge: "somali",
    gdp: 10489586,
    cities: ["muqdisho", "garoowe", "kismanyo"],
  },
  {
    name: "ethiopia",
    population: 903038484,
    continent: "africa",
    langauge: "english",
    gdp: 10489586,
    cities: ["adis ababa", "gondar", "harar"],
  },
];

//log countries and population

// countries.forEach(coountry=>{
//     console.log(`${coountry.name}:${coountry.population}:`)
// })

//create and array of country name in uppercase
// const coountryNames=countries.map(country=>country.name.toUpperCase())
// console.log(coountryNames)

//find  countries in asia with population>100m
// const asiacountries=countries.filter(country=>country.continent==="asia"&&country.population>100000000)
// console.log(asiacountries)

//find the countries that speaks english

//  const englishcountries=countries.filter(wadamada=>wadamada.langauge==="english"&&wadamada.name!=="unated state");
//  console.log(englishcountries)

//find the fast country where portuguese

// const portugueseCountry=countries.find(wadamada=>wadamada.langauge==="portuguese")
// console.log(portugueseCountry)

//reduce iskudar all ppl

// const totalPoulation=countries.reduce((sum,country)=>sum+country.population,(0))
// console.log(totalPoulation)

// console.log(countries.some(c=>c.name==="somalia"))//some waa soo hel camal sida includes midna ogoow includes object hal kama qaban karto string banaan yaalo maogiye
// console.log(countries.map(c=>c.name).includes("somalia"))//jidkana map baa markii koobad lagu soo saaray magacyada wadamada kadip includes ba lagu daba xidhay

// const magacyadaWadamad=countries.map(c=>c.name)//qaabkana wa isla qabka kore un map ba lagu sosaarya map aya laga dhex radiayay include markas
// const soosar=magacyadaWadamad.includes("somalia")
// console.log(soosar)

// const maraykanka=countries.find(c=>c.name==="unated state")//qaabkanaa ugu haboon
//     if (maraykanka) {
//         console.log(maraykanka.cities);

//     }
//     else{
//         console.log("kuma jiraan")
//     }

// const soosaar=countries.find(c=>c.name==="unated state")
//     if(soosaar){
//         console.log(soosaar.cities.slice(0,2))//qaabkana iyo qaabki hore wa isku mid lkn slice waa isoo bandhig ta koobaad ta labad
//     }
// else{
//     console.log("kema jiraan")
// }

// const caasimadaUNATED=countries.filter(c=>c.name==="unated state").map(c=>c.cities)//qaabkana iyo qabka sareba wa loosoo heli kara lkn kani waa array array kujira [[]]
// console.log(caasimadaUNATED)

//object dsetructuring //qaabkan casriga eh weye meeshii add kaqori lahayd consoloe .log(user.name) qaabkan dhihi maysid

// const user={
//    id:101,
//      name:"hamza",
//     email:"hamzefitax@gmail.com"

// }

// // const{id,name}=user
// // console.log(name)
// const xogta={
//   iD: 231,
//   name:"hamza",
//   email:"hamzaabdifatah@gamail.com"
// }
// const {name:key}=xogta
// console.log(key)

//renaming variables //qaabkana wa jira name wixi kujira username iigu shub kadip magaca username kadhig isoo bandhig

// const{name:Username}=user
// console.log(Username)

//nested destructuring waa object object kudhex oo lagaliyo value kale

// const order = {
//   id: 1,
//   product: {
//     name: "laptop",
//     price: 9999,
//   },
// };
// const {
//   product: { name},
// }=order
// console.log(name);
// const order={
//   id:102,
//   product:{
//     name:"laptop",
//     price:"$100",
//   }
// }
// const{
//   product:{name:productName,price:qiime}
// }=order;
// console.log(productName);
// console.log(qiime)

// //object spread  qaabkana waa copy paste camal iigu shub halkan xogtan weye (...)

// const newProduct={
//     ...order
// }
// console.log(newProduct)
// const newProduct={
//   ...order
// }
// console.log(newProduct)

//functions
//function ass variables

// const greet=function(name){
//   return `hello,${name}`
// }
// console.log(greet("hamze abdi"))

//function object iss called method coz object ayuu kudhex jira functionka saa darteed mutaxane maaha waa methods
// const calculator = {
//   add: function (a,b) {
//     return a+b;
//   }
// }
// console.log(calculator.add(2,4));

//callback function
//a callback is a function passed into onather function to be excuted later
// function greet(name,callback){
//   console.log(name),
//   callback()
// }
// greet("hamza",function(){
//   console.log("callback is excuted")
// })

//calculator callback
// function calculate(a,b ,operation){
// return operation(a,b)
// }
// const result=calculate(3,4,function(a,b){
//   return a+b
// })
// console.log(result)

//simple projecy using functions

//grading system

// function calculateGrade(student) {
//   const average = calculateAverage(student.scores);
//   const latterGrade = getGrade(average);
//   return {
//     name: student.name,
//     average: average,
//     grade: latterGrade,
//   };
// }
// function calculateAverage(scores) {
//   const sum = scores.reduce((total, score) => total + score, 0);
//   return sum / scores.length;
// }
// function getGrade(average) {
//   if (average >= 90) return "A";
//   if (average >= 80) return "B";
//   if (average >= 70) return "C";
//   if (average >= 60) return "D";
//   return "f";
// }
//  const student1={
//    name:"hamza",
//    scores:[56,78,34,45]
//  }
// const student1 = {
//   name: "hamza",
//   scores: [96, 100, 74, 45],
// };
// console.log(calculateGrade(student1));

// const products=[
//   {name:"dumbbell(5kg)",category:"gymequipment",price:4000,stock:5},
//   {name:"barbell",category:"gymequipment",price:4000,stock:10},
//   {name:"gloves",category:"gymequipment",price:4000,stock:1},
//   {name:"walk-machine",category:"gymequipment",price:4000,stock:4},
//   {name:"whey-protein",category:"gymsupplements",price:4000,stock:12},
//   {name:"protien-lactose-free",category:"gymsupplements",price:4000,stock:2},
//   {name:"l=glutimine",category:"gymsupplements",price:4000,stock:14},
//   {name:"creatine-mono",category:"gymsupplements",price:4000,stock:25},
// ];
// function iskuguKaydar(products){
//   return products
//   .filter(product=>product.stock>0).reduce((result,product)=>{
//     const dhamaantoodLacagtooda=product.price*product.stock;
//     if(product.category==="gymequipment"){
//       result.agabka+=dhamaantoodLacagtooda
//     }
//     else{
//       result.nafaqada+=dhamaantoodLacagtooda
//     }
//     return result;
//   },{
//     agabka:0,
//     nafaqada:0,
//   })
// }
// const result=iskuguKaydar(products)
// console.log(result.agabka+result.nafaqada)
// function MaalintaBarkaysan(maalmaha, index) {
//   if (maalmaha[index] === "jimco") {
//     return `jimco mubarak`;
//   } else {
//     return "jimco maaha";
//   }
// }
// const maalmaha = ["talaado", "arbaco", "khamiis", "jimco"];
// console.log(MaalintaBarkaysan(maalmaha, 3));

// function getExpensiveProducts(products, index) {
//   if (products[index].price > 100) {
//     return "Expensive";
//   } else {
//     ("Cheap");
//   }
// }
// const products = [
//   { name: "mouse", price: 50 },
//   { name: "mobile", price: 150 },
// ];
// console.log(getExpensiveProducts(products, 1));

// const orders = [
//   {
//     customer: "ali",
//     items: [
//       { category: "tech", price: 500, qty: 2 },
//       { category: "food", price: 100, qty: 3 },
//     ],
//   },
//   {
//     customer: "hassen",
//     items: [
//       { category: "tech", price: 300, qty: 1 },
//       { category: "food", price: 50, qty: 4 },
//     ],
//   },
//   {
//     customer: "omer",
//     items: [
//       { category: "tech", price: 200, qty: 3 },
//       { category: "food", price: 80, qty: 2 },
//     ],
//   },
// ];
// function Analyze(orders) {
//   return orders
//   .map(order=>{
//     const total=order.items.reduce((sum,item)=>sum+item.price*item.qty,0);
//     const TechTotal=order.items.filter(item=>item.category==="tech").reduce((sum,item)=>sum+item.price*item.qty,0);
//     if(TechTotal>=900){
//       return total-100
//     }
//     return total+50
//   }
// )
// .filter(total=>total>700).reduce((sum,total)=>sum+total,0)
//   }
//   console.log(Analyze(orders))

