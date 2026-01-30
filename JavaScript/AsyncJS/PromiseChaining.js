// Now how do we prevent callback hell -> through Promise Chaining in which we dont pass the callback function inside another function, instead we just attatch that function 
// by using .then() which will execute the callback only if the promise or previous function was resolved.

function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data ${id}`);
            resolve("Resolved");
        },3000)
    })
}

// getData(1).then(() => {
//     getData(2).then(() => {
//         getData(3).then(() => {
//             getData(4)
//         })
//     })
// })
// The above syntax is still sort of similar to callback hell's syntax as we are calling .then() inside .then()

// The syntax below is more readable because we return the promise inside .then() everytime. This is Promise Chaining.
getData(1).then(() => {
    return getData(2);
}).then(() => {
    return getData(3);
}).then(() => {
    return getData(4);
})