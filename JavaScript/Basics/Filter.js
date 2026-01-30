let arr = [1,3,7,4,9,8,2,5,6];
console.log(arr);

let brr = arr.filter((ele) => { // Only even elements
    if(ele%2==0) return true;
    else return false;
});

console.log(brr);

let crr = arr.filter(function (ele){
    if(ele%2!=0) return true;
    else return false;
});
console.log(crr);

let drr = arr.filter(ele => ele<6);
console.log(drr);