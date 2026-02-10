 // A JS object has properties and methods, It has default property called PROTOTYPE which inturn provides it some default properties and methods

 let obj = {
    name : "Medhaj Kulkarni",
    salary : 25000
 }

 console.log(obj.name,obj.salary);
 console.log(obj.toString()); // This toString function is being inherited by obj through Ptototype
 console.log(obj);

 const employee = {
    calcTax(){
        console.log("Tax bracket is 10%");
    }
    // calcTax : function (){
    //     console.log("Tax bracket is 10%");
    // }
 }

 const Medhaj = {
    salary : 25000
 }

 Medhaj.__proto__ = employee; // now employees's property and methods can be accessed by Medhaj because those property's and methods are part of the Prototype object within Medhaj.

Medhaj.calcTax();

const Shailaj = {
    salary : 50000,
    calcTax(){
        console.log("Tax bracket is 20%");
    }
}

Shailaj.__proto__ = employee;

Shailaj.calcTax(); // This will call objects own method and not prototypes