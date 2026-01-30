let subs : number | string = "1M"; // '|' is union operator which allows me to have multiple types for same variable
console.log(subs);
subs = 600000;
console.log(subs);

let apiRequests : 'pending' | 'fullfilled' | 'rejected'; // we can use union to define our own types as well
apiRequests = 'fullfilled';

let xyz; // xyz has type 'any'