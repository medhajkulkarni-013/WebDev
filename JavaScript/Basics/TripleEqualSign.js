a = 5;
b = 5;
console.log(a==b) // double equal will give true here 
console.log(a=='5') // but it will also give true over here because JS implicitly converts string '5' into int

console.log(a==='5') // now it will give false
console.log(a===b); 