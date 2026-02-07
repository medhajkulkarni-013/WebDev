// .then() for doing something if promise is successfuly resolved and .catch() when promise is rejected

const prom = new Promise((resolve,reject) => {
    console.log("Some Work/Task....");
    resolve("Fullfilled");
});

prom.then((res) => { // .then()'s callback accepts a default parameter res which contsains the resolve() handler message
    console.log(res);
});

const prom2 = new Promise((resolve,reject) => {
    console.log("Some Work/Task....");
    reject("Failed!!");
});

prom2.catch((err) => console.log(err)); // .catch()'s callback accepts a default parameter err which contsains the reject() handler message

/* IMP : While Promise constructuon is a synchronous operation, .then() and .catch() are asynchronous operations, they are not executed immediately, 
 their callbacks are first registered in the microtask queue and are executed after the JS thread is free/call stack is empty. Microtask queue have 
 higher priority than callback queue. */