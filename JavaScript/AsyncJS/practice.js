// Using Callback Hell

// function getData(id,getNewData){
//     setTimeout(() => {
//         console.log("Data",id);
//         if(getNewData) getNewData(); 
//     },3000);
// }

// getData(1,() => {
//     getData(2,() => {
//         getData(3,() => {
//             getData(4);
//         });
//     });
// });

// Using Promise Chaining

// function getData(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data",id);
//             resolve("Successfuly fetched Data "+id);
//         },3000);
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     return getData(2);
// }).then((res) => {
//     console.log(res);
//     return getData(3);
// }).then((res) => {
//     console.log(res);
//     return getData(4);
// });

// Using Async Await
function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Data ${id}`);
            resolve("Successfuly fetched Data "+id);
        },3000);
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}
getAllData();