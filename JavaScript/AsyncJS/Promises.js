// A promise is an object representing the eventual completion of an asynchronous operation. 

//  Usually API's return some promise which we need to handle but sometimes we need to create a promise as well :

/* promise accepts a callback function that has two inbuild parameters/handlers which are usally named resolve and reject, we use them to  
   know whether the promise was fulfilled or rejected. The Promise can be in three states : Pending, Fulfilled, Rejected */

// const promise = new Promise((resolve,reject) => { 
//     console.log("This is a Promise");
//     resolve(1);
// })
// console.log(promise);
/* 
Output when you run the above code in browser :
Promise {<fulfilled>: 1}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled" // because we called resolved in promise 
[[PromiseResult]] : 1
 */

// const promise3 = new Promise((resolve,reject) => { 
//     console.log("This is a Promise");
// })
// console.log(promise3);
/*
Promise {<pending>}
[[Prototype]] : Promise
[[PromiseState]] : "pending"
[[PromiseResult]] : undefined
*/

// const promise2 = new Promise((resolve,reject) => {
//     reject("Some error occured !!")
// })
// console.log(promise2);
/*
Promise {<rejected>: 'Some error occured !!'}
[[Prototype]] : Promise
[[PromiseState]] : "rejected"
[[PromiseResult]] : "Some error occured !!"
*/

// Now lets take the example which we took incase of callback hell, now this function returns a promise that it will get the data for an id within 3 seconds.
function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data ${id}`);
            resolve("Resolved");
        },3000);
    })
}
const prom = getData(1);
console.log(prom); // This will first print pending as promise will get resolved after 3 sec
