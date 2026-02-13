// A template for creating objects. The objects of that class will have all the properties and methods defined in that class.

class Student{
    constructor(name, cgpa, branch){
        this.name = name;
        this.cgpa = cgpa;
        this.branch = branch;
    }
    AssignProject(proj){
        this.proj = proj;
    }
    isProject(){
        return `${this.proj} Project is assigned`;
    }
}

let s = new Student("Medhaj Kulkarni",8.90,"CSE-AIML");
console.log(s);
console.log(s.name,s.branch,s.cgpa);
s.AssignProject("No");
console.log(s.isProject());

let s2 = new Student("Prateek",8.91,"CSE-AIML");