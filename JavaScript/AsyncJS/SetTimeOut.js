// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,4000); // hello is a callback

// setTimeout(() => { // writing callback as an arrow func
//     console.log("Hello");
// },5000) // will print Hello after 5 seconds


// Printing One two three four is not depended on settimeout, So JS will not wait for settimeout to get exec
// it moves on to three and four. This Asynchronous operation is possible because of setTimeout
// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello");
// },3000);

// console.log("Three");
// console.log("Four");


// setTimeout(() => {
//     console.log("Hello");
// },1000);
// setTimeout(() => {
//     console.log("Mello");
// },2000);
// setTimeout(() => {
//     console.log("Dello");
// },3000);

// setTimeout(() => {
//     console.log("Hello");
// },3000);
// setTimeout(() => {
//     console.log("Mello");
// },2000);
// setTimeout(() => {
//     console.log("Dello");
// },1000);

// Good example to show that asynchronous setTimeout will not always get executed after that many 
// seconds, if the JS thread is busy with other operations, the callback will wait in callback queue till
// thread is free/call stack is empty.

console.log("Hello Medhaj");

setTimeout(() => {
    console.log("Welcome to the Callback!!");
},1000);

let c = 0;
for(let i=0; i<10000000000; i++){
    c++;
}
console.log(c);

