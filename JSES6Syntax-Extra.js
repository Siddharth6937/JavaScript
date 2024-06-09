// let piku = {
//     name : "Priyanka kumari",
//     batch : "batch 10",
//     place : "Mumbai"
// }

// let info = `Hi, I am ${piku.name}, from ${piku.batch} in ${piku.place}`;

// console.log(info);

// let obj1 = {
//     a : 5,
//     b : 10
// }

// let obj2 = {
//     c : 15,
//     d : 20
// }

// let key1 = Object.keys(obj1);
// let key2 = Object.keys(obj2);
// let obj = {};

// for(let i = 0; i < key1.length; i++ ){
//     obj[key1[i]] = obj1[key1[i]];
// }

// for(let i = 0; i < key2.length; i++ ){
//     obj[key2[i]] = obj2[key2[i]];
// }


// obj = {...obj2, d : 50};

// console.log(obj2);
// console.log(obj);

/*_______________________________________*/

// 7. Includes() :- 
// let arr = [1,3,2,45,7]
// console.log(arr.includes(45));

// let x = "Siddharth"
// console.log(x.includes("dd"));

/*_______________________________________*/

// 8. Object property assignment

// let firstName = "Priyanka";
// let lastName = "Kumari";

// let studentDetails = {
//     firstName, lastName
// }

// console.log(studentDetails);

/*_______________________________________*/

// 9. Destructuring

// let info = { firstName : "Priyanka", lastName : "Kumari" }

// let {firstName,lastName} = info
// console.log(firstName, lastName);

/*_______________________________________*/

// 10. Objects.entries

// let studentDetails = { firstName : "Priyanka", lastName : "Kumari" }

// console.log(Object.keys(studentDetails));
// console.log(Object.values(studentDetails));
// console.log(Object.entries(studentDetails));

/*_______________________________________*/

// 11. Object.assign()

// Non-primitive Values :- Reference gets assigned
// let obj1 = { a:9, b:10}
// let obj2 = obj1;
// obj2.b =20;
// console.log(obj1); 

// Primitive Values :- Values get assigned 
// let x = 5;
// let y = x;
// y = 20;
// console.log(x);

/* Two types of Copy/Clone for non-primitive values
    1. Shallow Copy :- Copying will be done only upto one level 
    2. Deap Copy :- Copying will be done uptil last depth
 */

// Shallow Copy

// let studentDetails ={
//     firstName : "Priyanka",
//     lastName : "Kumari",
//     address : {
//         city : "Bokaro",
//         state : "Jharkhand"
//     }
// }

// 2. Object.assign

// let studentDetails2 = Object.assign({}, studentDetails);

//  studentDetails2.address.city = "Ramghar";

//  console.log(studentDetails);
//  console.log(studentDetails2);

// Deap Copy
//  1. Spread Operator (Should know the depth of the object - Not recomended)

let studentDetails = {
    firstName: "Priyanka",
    lastName: "Kumari",
    address: {
        city: "Bokaro",
        state: "Jharkhand"
    }
}

// let studentDetails2 ={ 
//     ...studentDetails,
//     address : { ...studentDetails.address}

// }

// studentDetails2.address.city = "Ramghar";

// console.log(studentDetails);
// console.log(studentDetails2);


        // 2. JSON methods
    // JSON.parse - String which is in javascript object format -> JavaScript Object
    // JSON.stringfy - JavaScript Object -> String which is in javascript object format 


    let studentDetails2 = JSON.parse(JSON.stringify(studentDetails));

    studentDetails2.firstName = "Siddharth"

    console.log(studentDetails);
    console.log(studentDetails2);