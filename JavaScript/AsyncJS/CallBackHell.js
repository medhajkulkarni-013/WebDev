// Suppose the function getData gets me data from the DB after 2 sec and i meed the data for id 1,2,3,4 that too one after the other i.e with a gap of 2 sec
function getData(id, getNewData){
    setTimeout(() => {
        console.log(`Data ${id}`);
        if(getNewData) getNewData();
    },2000)
}

// Nested callbacks which result in a very unreadable and unmaintainable codebase. This is also known as Pyramid of DOOM
console.log("getting data 1")
getData(1,() => {
    console.log("getting data 2")
    getData(2,() => {
        console.log("getting data 3")
        getData(3,() => {
            console.log("getting data 4")
            getData(4);
        })
    });
})


/*
2 nd problem is : Inversion of Control, it means you are loosing the control over how and when your code executes
by passing it to another function. Here you pass a callback inside getData-1, that callback again calls getData-2
but whether it is actully being called or not depends on the code written inside getData-1 and you have no control 
over that. 
*/


