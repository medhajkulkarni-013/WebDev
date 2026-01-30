// Objects are like maps in c++ which stores key value pair
// let obj = {
//     name : "Medhaj",
//     age : 21,
//     cgpa : 8.90,
//     isMarried : false
// };
// console.log(obj.name,obj.age,obj.cgpa,obj.isMarried);

let obj = {
    name : "Medhaj",
    age : 21,
    cgpa : 8.90,
    'is Married' : false
};
console.log(obj['name'],obj['age'],obj['cgpa'],obj['is Married']); // 2nd approach to print
console.log();
// use forIn loop to print ogject
for(const key in obj){
    console.log(key,obj[key]);
}

