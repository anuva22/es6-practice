class Student{
    constructor(studentId, studentName){
        this.id = studentId;
        this.name = studentName;
        this.country = "Turky"
       // this.id = 1;
        //this.name = "burak";
    } 
}

const student1 = new Student(1007, "Burak");
const student2 = new Student(9903, "Yourks");
const student3 = new Student(7773, "Harry");

//console.log(student1, student2);
//console.log(student1.name, student2.name);
console.log(student3);