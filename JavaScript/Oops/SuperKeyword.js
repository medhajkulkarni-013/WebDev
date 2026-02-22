// Super keyword is used to is used to call the constructor of the parent class inorder to access its properties and methods. Must call super constructor
// in derived class before using 'this' or returning from derived constructor.
class Person {
    constructor(name){
        this.species = "Homo Sapiens";
        this.name = name;
    }
    work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Person{
    constructor(name,branch){
        super(name);
        this.branch = branch;
    }
    work(){
        console.log("Solve Engineering Problems");
    }
}

let e1 = new Engineer("Medhaj","CSE-AIML");
console.log(e1);
