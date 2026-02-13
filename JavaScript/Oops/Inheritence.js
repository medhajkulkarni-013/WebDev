class Person{
    constructor(){

    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing!!");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solving Problems and Building Something");
    }
}

let e1 = new Engineer(); // e1 object of Engineer class inherits properties like eat,sleep from parent class Person.
e1.eat();
e1.sleep();
e1.work(); // If a child class and parent class have a same method or property then child class's property or method will be accessed (method overriding)  