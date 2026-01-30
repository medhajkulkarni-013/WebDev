s = "Medhaj Kulkarni";
console.log(s);
console.log(s.length);

// Only for and forOf loop work for string and not forEach loop

// IMPORTANT FUNCTIONS

// uppercase and lowercase
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// trim -> removes leading and trailing spaces
// s = "         Medhaj Kulkarni     ";
// console.log(s);
// console.log(s.trim());

// indexOf
// console.log(s.indexOf('a'));
// console.log(s.lastIndexOf('a'));

// Substring or Slice
console.log(s.slice(3)) // substring from ith index to end
console.log(s.slice(3,13)) // substring from i to j-1th index

// Split
s = "Medhaj, is, SDE, Intern, at, Bentley, Systems";
let arr = s.split();
console.log(arr);
arr = s.split(" ");
console.log(arr);
arr = s.split(',');
console.log(arr);

