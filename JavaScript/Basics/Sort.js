let arr = [4,-7,2,1,9,-8];
console.log(arr);

let brr = arr.sort(); // Default sort gives wrong answer in case of -ve numbers
console.log(brr);

let crr = arr.sort((a,b) => { // proper ascending sort
    return a-b;
});
console.log(crr);

let drr = arr.sort((a,b) => { // proper descending sort
    return b-a;
})
console.log(drr);