//  let a = 10;
//  let b = 3;
 
//arithmatic oprearoters
// console.log(a+b); //adition weye
// console.log (a-b);  //supstraction weye
// console.log(a*b);   //multiplication weeye
// console.log (a/b);  //division
// console.log(a%b); //module (reminder of division)
// console.log(a**b);//exponention(a riased to the bower of b) laba jibaar

//comparison operators
//console.log(5==5);//waxa sobixi true 55 malimad thy
// console.log(5==="5")  // waa false  cuz === waxa la eegi doonaa number miya mise wa string lkn hadi== aad kadhigto wa true laegi mayostring am numbe..console.log(5!=4) //5 lamid maaha(!=) afar waa run
// console.log(5!=4); 5!=4 5 lamid maaha afar waa run (!myaanan kaduwanayn weye)
//console.log(5>2); 5makawayntahay 2 waa run < less than na hada dhahdo wa been

//logical operators
//let x=true;
//let y=false;
// console.logo(a&& y); x &(and) y waa false y darted ba false loodhahay (and operator)
// console.log(x || y); //(or operator labadan mid hadi ture noqoto taasa laqaadani)
//console.log(!y); //not (!)operator aya ladhaha

// assignment operators
// let num=100;
// num +=20;
// num -=20
// num *=20
// num /=20
// num **=2
// console.log(num);

// let name="hamza";
// let lastname="abdi";
// let nextname="fatah";
//  let fullname= name+" "+lastname+" " +nextname;
// console.log(fullname);
// let radius=5;
// let area=math.pi * math.power(radius, 2);
// /console.log(area);
// let reminder=17%4;
// console.log(reminder);
// let radiue=5
// let area=Math.pi * Math.power(radiue,2);
// console.log(area)

// excerice ka macalinka
// part 1 xisaabdka arithmetic
// calculate the area of  a circle with radius 5
// let radius = 5;
// let area = Math.PI * radius ** 2;
// console.log("bedka goobada (radius 5 ):", area);
// let remainder = 17 % 4; //calculate the number of 17 divided by 4
// console.log(remainder);
// let name = "hamza";
// let lastname = "abdi"; //write an expression that concatantes your first and last name
//  let nextname = "fatah";
//  let fullname = name + " " + lastname + " " + nextname;
//  console.log(fullname);

// // qaybta 2aad comparison operation
// console.log(5 > 3); //compare if 5 is greater than 3
// console.log("hello" === "hello"); //check hello if equal to hello
// console.log(10 !== "10"); //virify if  10 is not equal to "10"       (fahan halka !==strigt iyo not equal weye)
// let age = 25; //cheack if a variable age is bteween 18 --65 (inclusive)
// console.log(age >= 18 && age <= 65);

// // qybta 3 logical operators
// let number = 15; //check if a number is between 10 an 20 (exclusive)
// console.log(number > 10 && number < 20);
// let value = "softcampare"; //check if a value is not null  and undefined
// console.log(value !== null && value !== undefined);
// let personage = 20; //wirte a condition that checks if a person can vote (18+ isCitizen)
// let isCitizen = true;
// console.log(personage >= 18 && isCitizen);
// let isadmin = true; //verify if a user is either an admin or has premium status
// let ispremium = false;
// console.log(isadmin || ispremium);
// let num = 100;
// num += 25;
// num -= 30;
// num *= 2;
// num %= 5;
// console.log(num);

// let name = "abdulahi";
// let lastname = "abdi";
// let nextname = "fatah";
// let fullname = name+ " " +lastname+ " " +nextname;
// console.log(fullname);

// // |||||||
  // const form = document.getElementById("formList");
  //     const inputList = document.getElementById("inputList");
  //     const taskList = document.getElementById("taskList");
  //     form.addEventListener("submit", function (e) {
  //       e.preventDefault();
  //       const text=inputList.value
  //       addlist(text);
  // tasks.push(text)
  // localStorage.setItem("tasks",JSON.stringify(tasks))
  //       inputList.value="";
  //     });
  //     function addlist(text) {
  //       const li = document.createElement("li");
  //       li.innerHTML = `<span>${text}
  //       <button type="button" class="deleteBtn">x</button>`;
  //       taskList.appendChild(li);
  //       li.querySelector(".deleteBtn").addEventListener("click",()=>{
  //           li.remove();
  //           const index=tasks.indexOf(text);
  //           if (index >-1){
  //               tasks.splice(index, 1)
  //           }
  //           localStorage.setItem("tasks",JSON.stringify(tasks))
  //       } )
    
  //     } 
  //     const tasks=
  //     JSON.parse(localStorage.getItem("tasks"))||[];
  //     tasks.forEach(task=>{
  //       addlist(task)
  //     })

