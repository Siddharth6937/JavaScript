// JavaScript classes are templates for JavaScript Objects.

/*
    SYNTAX -

    class ClassName{
        constructor(){
                
        }
    }

    constructor is the only method which gets invoked directly at the time of object creation

*/

/*------------------------------------------------*/
// class Student{
//     constructor(name, batch, techStack){
//         this.name = name;
//         this.batch = batch;
//         this.techStack = techStack;
//     }

//     // Methods
//     //Getter method

//     displayInfo(){
//         console.log(`${this.name} from batch ${this.batch} is currently learing ${this.techStack}.`);
//     }
// }

// const siddharth = new Student("Siddharth", 10, "MERN STACK");
// const piku = new Student("Priyanka", 10, "AWS ");

// console.log(siddharth);
// siddharth.displayInfo();
// piku.displayInfo();

/*___________________________________________________________*/

class Student {
    constructor(name, batch, techStack, subjectMarks) {
        this.name = name;
        this.batch = batch;
        this.techStack = techStack;
        this.subjectMarks = subjectMarks;
    }

    // Methods
    //Getter method

    displayInfo() {
        console.log(`${this.name} from batch ${this.batch} is currently learing ${this.techStack}.`);
    }

    displayMarks(){
        this.subjectMarks.map((singleSubject, index) => {
            console.log(`SUBJECT ${index+1} ${singleSubject.subject}  ${singleSubject.marks}`);
        })
    }

    isPass() {
        return this.subjectMarks.every((element) => element >= 35);

    }

    avgMarks(){
        let sum = 0;
        for (let i = 0; i < this.subjectMarks.length; i++) {
            sum += Number(this.subjectMarks[i].marks);
        }

        // let sum = this.subjectMarks.reduce((acummulator, element) => acummulator+element);

        console.log(`The average of ${this.name} is ${sum / this.subjectMarks.length}`);
    }
}

// const pi = new Student("Priyanaka", 10, "MERN STACK" ,[35,69,93,83,82]);
// const si = new Student("Siddharth", 10, "MERN STACK" ,[35,6,93,83,82]);
// pi.displayInfo();
// console.log(pi.isPass() ? "RESULT : Pass" : "RESULT : Fail");

// si.displayInfo();
// console.log(si.isPass() ? "RESULT : Pass" : "RESULT : Fail");

/* Q - Create isPass getter method, ehich check whether the student has score >= 35 marks in every subject. If yes return true else false
    log result based on value retured
*/

const sid = new Student("Siddharth", 10, "MERN STACK", [
            {subject: "Maths", marks: "86" },
            {subject: "English", marks: "60" },
            {subject: "Science", marks: "35" },
            {subject: "Hindi", marks: "16" },
            {subject: "Computer", marks: "98" },
]);


sid.avgMarks();
sid.displayMarks();
console.log(sid.isPass() ? "Result : PASS" : "Result : FAIL");
