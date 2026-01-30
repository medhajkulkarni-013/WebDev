let myName = "Medhaj"; // Here Ts draws inference that the type must be string 
let isValid = true; // Here Ts draws inference that the type must be boolean

let a : number = 10; // here i have anootated the type as number
let blah : string = "Hello Medhaj"; // here i have anootated the type as string
console.log(blah);
console.log(a);

function Sum(a : number, b: number) : number{ // here i have annotated the function parameters and the return type to number
    return a+b;
}

let ans : number = Sum(8,9);
console.log(ans);