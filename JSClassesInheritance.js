 // Class inheritance 
// child class can inherit all the properties of parent class and have some unique properties and methods of the child.
// Using extends keyword.
// super method - invokes the constructor of parent class 

 /*
    Example in Human Hierarchy
    parent : 
        1. First Name
        2. Last Name
        3. DNA
        4. age

    Child :
        1. First Name
        4. age 

        [Last Name and DNA is inherited from the parent]
    */


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    displayInfo(){
        return `${this.firstName} ${this.lastName} is ${this.age} old.`;
    }
}

class Student extends Person{
    constructor(firstName, lastName, age,stream, course, batch){
        super(firstName, lastName, age);
        this.stream = stream;
        this.course = course;
        this.batch = batch;
    }

    displayCompleteInfo(){
        return `${this.displayInfo()}. He/She is currently pursunig ${this.stream}, ${this.course} course and is from batch ${this.batch}`;
    }
}

// const vashnavi = new Person('Vashnavi', 'Gupta', 21);
// console.log(vashnavi.displayInfo());


const vashnavi = new Student('Vashnavi', 'Gupta', 21, 'Computer Science', 'WEB Devloper', 10);
console.log(vashnavi.displayInfo());
console.log(vashnavi.displayCompleteInfo());
// console.log(vashnavi);