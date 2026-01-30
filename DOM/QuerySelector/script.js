let x = document.querySelector("h1"); 
x.style.color = "red";
x.style.backgroundColor = "green";

let y = document.querySelector("h2");
y.style.backgroundColor = "aqua"

let z = document.querySelectorAll("h1");
setTimeout(() => {
    z[1].innerHTML = "Changed!!!";
},3000)