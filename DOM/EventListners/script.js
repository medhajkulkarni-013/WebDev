// either use the one below.
// let pikachu = document.querySelector("#ele1");
// let charizard = document.querySelector("#ele2");
// let mewtwo = document.querySelector("#ele3");

let pikachu = document.getElementById("ele1");
let charizard = document.getElementById("ele2");
let mewtwo = document.getElementById("ele3");

let isMewtwoChanged = false;

pikachu.addEventListener("click",() => {
    pikachu.style.color = "orange";
    pikachu.style.backgroundColor = "yellow";
});

charizard.addEventListener("mouseenter",() => {
    charizard.style.color = "white";
    charizard.style.backgroundColor = "orange";
});

charizard.addEventListener("mouseleave",() => {
    charizard.style.color = "black";
    charizard.style.backgroundColor = "white";
});

charizard.addEventListener("click",() => {
    if (!isMewtwoChanged) {
        mewtwo.style.color = "white";
        mewtwo.style.backgroundColor = "purple";
        isMewtwoChanged = true;
    } else {
        mewtwo.style.color = "black";
        mewtwo.style.backgroundColor = "white";
        isMewtwoChanged = false;
    }
});

let isBalbasaur = false;

mewtwo.addEventListener("click",() => {
    if(!isBalbasaur){
        pikachu.innerHTML = "Bulbasaur";
        pikachu.style.backgroundColor = "green";
        isBalbasaur = true;
    }
    else{
        pikachu.innerHTML = "Pikachu";
        pikachu.style.color = "black";
        pikachu.style.backgroundColor = "white";
        isBalbasaur = false;
    }
});