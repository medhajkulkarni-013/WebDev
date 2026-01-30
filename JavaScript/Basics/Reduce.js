// Define an array of numbers
const numbers = [1, 2, 3, 4];

// Use reduce to sum all elements, starting with initial value 0
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Returns 10

// Use reduce to subtract all elements from an initial value of 0
const negSum = numbers.reduce((acc, curr) => {
    return acc - curr; // Subtract current value from accumulator
}, 0); 

console.log(sum);
console.log(negSum); 