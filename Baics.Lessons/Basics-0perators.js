let a = 10;
let b = 3;

//1 arithmetic operators
//console.log(a+b)   +
// console.log(a-b)  -
// console.log(a*b)  *
//console.log(a%b)   %
//console.log(a/b)   /
// console.log(a ** b)  ** (power)

// 2 assign operators
//=  assign
// +=  add then save
// -= subtract then save
// *= multiply then save
// /= divide then save
// %= reminder then save (or modulus and save)
// **=exponentaition then save(or power then save)
// let x=5
//  x+=3
// x*=2
// x/=2
// x-=2
// x%=3
// x**=10
// console.log(x)

//3 comparison operators
// ==    equal to (compare value only)
// ===   strict equal to (compare both value) (value and data type)
// !=    not equal to
// !==   strict not equal to(compare both)
// >     greter Than
// <     less than
// >=    greter than or equal to
// <=    less than or equal to
// let x=5
// console.log(5=="5")
// console.log(5==="5")
// console.log(5!=4)
// console.log(5!==5)
// console.log(5>4)
// console.log(5<6)
// console.log(5>=5)
// console.log(5<=5)


// //4 logical operetors
// && and
// || or
// ! not
// let haveaLaptop=false
// let haveaElectiric=true
// // let caniLearnAcoding=haveaLaptop && haveaElectiric
// // let caniLearnAcoding=haveaLaptop || haveaElectiric
// let caniLearnAcoding= !haveaElectiric
// console.log(caniLearnAcoding)
// let x=true
// let y=false
// console.log(x && y)
// console.log(x || y)
// console.log(!x)
// console.log(!y)
//5  increment & decrement
// += add one
// -= subtract one
// let num=5
// num++
// /num--
// /console.log(num)


//6 string operators
// +
// +=
// let first="hamze"
//  let last="fitax"
// console.log(first+" "+last)


//7 ternary operators
// condition ? value1: value2
// let age=20
// let result=age>=18  ? "adult":"child"
// console.log(result)
// let age=20;
// let result=age>=28 ? "adult":"chiild";
// console.log(result)
// let school="jigjiga university"
// let result=school==="jigjiga university" ? "yes":"no"
// console.log(result)

//8  type operators
// typof and instanceof
// typeof "hello world"
// typeof 10
// console.log(typeof"hello world")
// console.log(typeof 10)
// let names=["hamze","axmad","cali"]
// console.log(names instanceof Array)//true
// console.log(names instanceof Function)//false
// console.log(names instanceof object)//true

//9 nullish coalescing operator
// ??
//  let name=null
//  console.log(name ?? "guest")

//10 Optional chaining
//?
// const hotelWuxukuyaalaa={
//     name:"haaracd Hotel",
//     address:{
//         city:"jigjiga"
//     }
// }
// console.log(hotelWuxukuyaalaa.address.city)#
//  const hotel1={name:"haaaracad Hotel", address:{city:"jigjiga"}}
// const hottel2={name:"sayid Hotel"}
// console.log(hotel1.address?.city)
// const isticaamle={
//     hallodheh:(text)=>`soo dhawoow wll"${text}`,
//     hallodheh:(text)=>"soo dhawoow wll"+text
// }
// const isticaamle2={}
// console.log(isticaamle.hallodheh?.("hamza"))
// console.log(isticaamle2.hallodheh?.())
// const one={
//     hallo:(text)=>`soo dhawoow wll${text}`,
// hallo:(text)=>`wll come wll`+text
// }
//  const two={}
// console.log(one.hallo?.("hamza"))
// let user={
//     id:1
// }
// console.log(user?.profile?.name)
//error "cannot read properties of undefined"
// let user={
//     name:"hamza"
//    //none address
// }
// console.log(user.address.city)
//undefined
// let user={
//     name:"hamza"
//     //address none
//     //city
// }
// console.log(user?.address?.city)
//coorect
// let user={
//     name:"hamza",
//     address:{
// city:"jigjiga"
//     }
// }
// console.log(user?.address?.city)
