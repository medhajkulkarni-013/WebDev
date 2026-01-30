var myName = "Medhaj"; // Here Ts draws inference that the type must be string 
var isValid = true; // Here Ts draws inference that the type must be boolean
var a = 10; // here i have anootated the type as number
var blah = "Hello Medhaj"; // here i have anootated the type as string
console.log(blah);
console.log(a);
function Sum(a, b) {
    return a + b;
}
var ans = Sum(8, 9);
console.log(ans);
