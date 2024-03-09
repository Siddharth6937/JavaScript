let students = [
    {
        name: "Vashnavi",
        batch: 8,
        marks: {
            science: 80,
            social: 70,
            hindi: 80,
            maths: 100,
            english: 90,
        }
    },
    {
        name: "Abhishek",
        batch: 10,
        marks: {
            science: 75,
            social: 75,
            hindi: 62,
            maths: 81,
            english: 52,
        }
    },
    {
        name: "papu",
        batch: 10,
        marks: {
            science: 70,
            social: 72,
            hindi: 75,
            maths: 95,
            english: 82,
        }
    },
    {
        name: "Ram",
        batch: 7,
        marks: {
            science: 35,
            social: 24,
            hindi: 22,
            maths: 95,
            english: 67,
        }
    },
    {
        name: "Shyam",
        batch: 9,
        marks: {
            science: 45,
            social: 87,
            hindi: 65,
            maths: 78,
            english: 99,
        }
    }
]

//        Q - Returns array of students with details as following deatails :-

/*      Method 1

let calculatedArray = [];

for (let i = 0; i < students.length; i++) {
    let obj = {};

    obj.name = students[i].name;
    obj.batch = students[i].batch;
    obj.avg = Object.values(students[i].marks).reduce((accumulator, Element) => {
        return accumulator + Element;
    });

    obj.avg = obj.avg / 5;

    calculatedArray.push(obj);
}

console.log(calculatedArray);

*/

        // Method 2. (a)
/*
let studentsDeatails = students.map(student => {
    let x = Object.values(student.marks).reduce((accumlator,element) => {
        return (accumlator+element);
    })

    x /= Object.values(student.marks).length;

    return {
        name : student.name,
        batch : student.batch,
        avgMarks : x
    }
});

console.log(studentsDeatails);
*/

        // Method b

        let studentsDeatails = students.map(student => {
        
            return {
                name : student.name,
                batch : student.batch,
                avgMarks : Object.values(student.marks).reduce((accumlator,element) => (accumlator+element)) / Object.values(student.marks).length
            }
        });

        console.log(studentsDeatails);
