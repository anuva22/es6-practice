class Parent {
    constructor(){
        this.fatherName = "Styles";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Rooroo");
const baby2 = new Child("Doodoo");
//console.log(baby);
//console.log(baby2);
console.log(baby.getFullName());