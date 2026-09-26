// //promises

// const dataServer = new Promise((resolve, reject) => {
//   const winner = false;
//   setTimeout(() => {
//     if (winner) {
//       resolve("win! data cameout correctly.");
//     } else {
//       reject("error! data cameout wrongly");
//     }
//   }, 2000);
// })
//   .then((data) => {
//     document.getElementById("result").innerText = data;
//     document.getElementById("result").style.color = "green";
//   })
//   .catch((error) => {
//     document.getElementById("result").innerText = error;
//     document.getElementById("result").style.color = "red";
//   });
// const dataservver = new Promise((resolve, reject) => {
//   const winner = false;
//   setTimeout(() => {
//     if (winner) {
//       resolve("waa guul");
//     } else {
//       reject("waa guuldaro");
//     }
//   }, 2000);
// }).then((data) => {
//   document.getElementById("result").innerText = data;
//   document.getElementById("result").style.color = "green";
// }).catch((err)=>{
//   document.getElementById("result").innerText=err;
//   document.getElementById("result").style.color="red"
// })
