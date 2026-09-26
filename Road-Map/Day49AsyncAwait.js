const button = document.getElementById("btn");
const result = document.getElementById("result");
button.addEventListener("click", LoadUser);
async function LoadUser() {
  result.textContent = "loading...";

  try {
    const response = await 
    fetch(
      "https://Jsonplaceholder.typicode.com/users/1",
    );
    const user = await
     response.json();
    result.innerHTML = `
Name:${user.name}<br>
Email:${user.email}<br>
City:${user.address.ctiy}`;
  } catch (error) {
    result.textContent="error loading data !"
console.log(error)  
}
}
