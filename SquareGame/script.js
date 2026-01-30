let square1 = document.getElementById("sq1");
let square2 = document.getElementById("sq2");
let square3 = document.getElementById("sq3");
let square4 = document.getElementById("sq4");

square1.addEventListener("mouseenter",() => {
    let r = Math.floor(Math.random()*100);
    square1.innerHTML = `<h1>${r}</h1>`;
});
square1.addEventListener("mouseleave",() => {
    square1.innerHTML = "<h1>1</h1>";
})


let isRed = false;
square2.addEventListener("mouseenter",() => {
    if(!isRed){
        square2.style.backgroundColor = "red";
        isRed = true;
    }
    else{
        square2.style.backgroundColor = "green";
        isRed = false;
    }
});
square2.addEventListener("mouseleave",() => {
    square2.style.backgroundColor = "white";
});

// any color is in form of rgb(val1,val2,val3)
square3.addEventListener("mouseenter",() => {
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);

    square3.style.backgroundColor = `rgb(${val1},${val2},${val3})`;
});
square3.addEventListener("mouseleave",() => {
    square3.style.backgroundColor = "white";
});

square4.addEventListener("click",() => {
    let sqR = Math.floor(Math.random()*256);
    let sqG = Math.floor(Math.random()*256);
    let sqB = Math.floor(Math.random()*256);
    square1.style.backgroundColor = `rgb(${sqR},255,255)`;
    square2.style.backgroundColor = `rgb(255,${sqG},255)`;
    square3.style.backgroundColor = `rgb(255,255,${sqB})`;
});
square4.addEventListener("mouseleave",() => {
    square1.style.backgroundColor = "white";
    square2.style.backgroundColor = "white";
    square3.style.backgroundColor = "white";
});