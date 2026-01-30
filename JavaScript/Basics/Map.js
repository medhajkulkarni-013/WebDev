let arr = [1,-3,5,-7];
console.log(arr);
function double(ele){
    return ele*2;
}
let brr = arr.map(double);
console.log(brr);

let crr = arr.map(function(ele){
    return Math.abs(ele);
});
console.log(crr);

let drr = arr.map((ele) => {
    return ele*ele;
});
console.log(drr);

let err = arr.map(ele => ele*-1);
console.log(err);