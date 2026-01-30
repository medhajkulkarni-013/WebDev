let arr : number[] = [2,3,4,5,6,8] // array whose type is annotated to number

for(let ele of arr){
    console.log(ele);
}

let brr : (number | string)[] = [2,5,7,8,"medhaj"]; // array whose type is annotated to string and number

for(let ele of brr){
    console.log(ele);
}