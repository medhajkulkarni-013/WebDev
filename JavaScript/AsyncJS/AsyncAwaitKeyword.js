// Async keyword can make any function asynchronous, it always returns a promise

async function greet(){
    console.log("Hello Medhaj");
}
greet(); // if you call this function in the browser then it will also return a promise.

// await keyword pauses the execution of its surrounding async function untill the promise is settled.

function myGreet(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Hello from Promise");
            resolve(200);
        },3000);
    });
}
// we cannot directly call 'await myGreet()' coz await keyword only works inside the async function
async function blah(){
    await myGreet();
}
blah();


// Now same example as Callback Hell and Promise Chaining
function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data",id);
            resolve("Success");
        },3000);
    });
}
// This is much more readable and cleaner syntax to understand, also we can wrap the function in an IIFE to avoid the function call 'getAllData()'
(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})()
//getAllData();

