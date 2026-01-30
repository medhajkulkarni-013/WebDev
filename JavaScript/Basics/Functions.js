// function Print1To10(){
//     for(let i=1; i<11; i++){
//         console.log(i);
//     }
//     console.log();
// }
// Print1To10();
// Print1To10();
// Print1To10();

// // SOME IMPORTANT IN BUILT FUNCTIONS
// console.log(Math.abs(-7.98));

// console.log(Math.max(11,24,6,7778,88,99999)); // max and min can have more than 2 arguments
// console.log(Math.min(-22,12,456,-78,987));

// console.log(Math.sqrt(144));
// console.log(Math.sqrt(55));
// console.log(Math.cbrt(6.6)); // cube root

// console.log(Math.log10(100000));
// console.log(Math.pow(4.4,3));

// console.log(Math.floor(12.87));
// console.log(Math.ceil(13.1));

// console.log(Math.random()) // generates a random number between (0,1) 

// ARROW FUNCTIONS
// Below is the normal approach
function Sum(a,b){
    return a+b;
}
let ans = Sum(9.5,8);
console.log(ans);

// Arrow version
const sumVal = (a,b) => {
    return a+b;
}
console.log(sumVal);
console.log(sumVal(8,5));

const mulAns = (a,b) => {
    return a*b;
}
console.log(mulAns(4,7));


