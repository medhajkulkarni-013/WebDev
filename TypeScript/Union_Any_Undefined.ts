let subs : number | string = "1M"; // '|' is union operator which allows me to have multiple types for same variable
console.log(subs);
subs = 600000;
console.log(subs);

let apiRequests : 'pending' | 'fullfilled' | 'rejected'; // we can use union to define our own types as well
apiRequests = 'fullfilled';

let xyz; // xyz has type 'any'
xyz = "medhaj";
xyz = true;
xyz = 90;
// any is a type that accepts anything, while undefined is an actual value/type indicating something hasn't been assigned.
let name : string | undefined;
console.log(name); // this will print undefined

let age : number;
// console.log(age); // this will give error because i have not declared age as undefined hence i must assign value to it before printing.

function greet(name?: string) {  // optional parameter is string | undefined, The ? after a parameter name makes it optional in TypeScript.
    console.log(name);  // could be undefined
}

