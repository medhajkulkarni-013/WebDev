// arr = [1,2,3,4,5];
// console.log(arr);

// let n = arr.length;

// for(let i=0; i<n; i++){
//     console.log(arr[i]);
// }

// arr.push(6); // adds 6 to the end of the array
// console.log(arr);
// arr.pop() // removes from behind
// console.log(arr);
// arr.unshift(50); // adds from front
// console.log(arr);
// arr.shift(50); // removes from front
// console.log(arr);

// if you make array const in JS then you can manipulate the array but the variable name of that array becomes constant
// const arr = [1,2,3,4,5,6];
// console.log(arr);  
// arr[0] = 10; // allowed
// console.log(arr);
// let arr = 5; // not allowed

// In JS array's can hold multiple datatypes
arr = [1,2,true,"Medhaj",9.87,[1,2,3]];
let n = arr.length;
/*
console.log(arr);

console.log();

for(let i=0; i<n; i++){
    console.log(arr[i]);
}

console.log();

// For of loop
for(const ele of arr){
    console.log(ele);
}
*/

// For each loop
arr.forEach((ele,i) => {
    console.log(ele,i);
});

console.log();

arr.forEach((ele) => {
    console.log(ele);
});


