// A function which is passed as an argument through another function is called Callback

// function sum(a,b){
//     console.log(a+b);
// }

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}    

calculator(4,6,(a,b) => {
    console.log(a+b)
}); // the sum function defination is written here itself