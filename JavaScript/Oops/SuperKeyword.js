class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    constructor(){

    }
    work(){
        console.log("Solving Problems and Building Something");
    }
}