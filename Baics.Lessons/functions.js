//function declaration iyo function expration
// function declaration defined the keyword function
//hoisted waxaa loo waca before declaration  bal arag console ayaa so kareeyn kara sida hoos kamuuqto kale

// console.log(square(5))
// function square(num){
//     console.log(`hello`)
//    return num *num
// }

//function calling 
//square(5)


//function expration  isaga kor lama soo marin karo console .log ga 

//assigned to a variables
// const square=function(num){
//     return num * num 
// }
// console.log(square(4))

// 2 function arrow
//  const add=function(a){
//     return a+a
//  }
//  console.log(add(6));
//   const add=(a)=>a+a

//  console.log(add(6));

//3 paremers and arguments

// const registerUser =function(name,email){
// console.log(`name:${name},email:${email}`)
// }
// registerUser(`mohamed`,`mohamed@gmail.com`)

//4 return statment and return values
// every function return something .if no return is spefied it returns undefined

// function isadult(age){
//     if(age>18){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isadult(20))

// 5 scope

//global scope,function scope,blog scope sadexdaas noocbaa kala jira scop yada

// let globalVar="eccesibl every where"
// function test(){
//     console.log(globalVar)
// }
// console.log(test())
// let globalVar="oo gal ooo gad" //qaabkan wax undefined eh malaha sida tusalahan kore
// function soosaar(){
//     console.log(globalVar)
// }
// soosaar()

//function scope //waxa loo yaqaanaa qaabka function scope banaanka wixi kabaxsan lagama yaqaano halkan
// function test(){
//     let name="mohamed"
//     console.log(name)
// }
// console.log(name)

//block scope kanna waa sido kale new age banaanka lagama yaqaano

// let age=16
// if(age>18){
//     let newAge=19
// }
// console.log(newAge)

//immidietly invoked function expression function horey iiga wac

// (function(name){
//     console.log(name)
// })("hamza")

// const result=(function(a,b){
//     return a*b
// })(5,6)
// console.log(result)



//excersice kii macalinka
// function salaan(){
//     return "hello world"
// }
// console.log(salaan())

// function name(magaca){
//     return "hello,"+magaca+" soo dhawoow"
// }
// console.log(name("mustafe"))

// function add(a,b){
//     return a+b
// }
// total=add(10,20)
// console.log(total)
// const add=(a,b)=>a+b;
//     console.log(add(10,20))

// function ogaansho(lambar){
//     if(lambar%2===0){
//     return "odd"
// }
// else{
//     return "even"
// }
// }
// console.log(ogaansho(3))


// function areaRectangle(length,width){
//     return length*width
// }
// console.log(areaRectangle(10,30))
// const xisaabiBedka= function(length,width){
//     let area=length*width;
// return `bedka laydigu waa: ${area}`;
// }
// console.log(xisaabiBedka(8, 4))
// const areaRectangle=(length,width)=>length*width
// console.log(areaRectangle (12,3))

// function calculate(a,b){
//     return a+b*2
// }
// const x=calculate(5,3);
// const y=calculate(x,4);

// console.log(y)