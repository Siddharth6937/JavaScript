let students = [
    {
        name : "Rama",
        batch : 9,
        likesIcecream :true,
    },
    {
        name : "Irfan",
        batch : 8,
        likesIcecream :false,
    },
    {
        name : "Swapneel",
        batch : 7,
        likesIcecream :false,
    },
    {
        name : "Sampath",
        batch : 8,
        likesIcecream :true,
    },
    {
        name : "Vishwanath",
        batch : 9,
        likesIcecream :true,
    }
];

let newArr = [];
//                         //Method 1 :- for loop
//                     // Ittrative for loop 
//     for (let index = 0; index < students.length; index++) {
//         if(students[index].likesIcecream == true){
//             newArr.push(students[index]);
//         }
//     }


                    // for in loop

// for (let key in students) {
//     if(students[key].likesIcecream == true){
//         newArr.push(students[key])
//     }
// 

// console.log(newArr);

                    // Method 2 :- forEach()
//     students.forEach((element, index) =>{
//     if(students[index].likesIcecream == true){
//         newArr.push(element);
//     }
// });
// console.log(newArr);

                        //Method 3. filter
// let x = students.filter((element,index) => element.likesIcecream === true);
// let x = students.filter(element => element.likesIcecream ); 
// console.log(x);


        //Method 1 :- for in loop

// for (let key in students) {
//     if(students[key].likesIcecream  && students[key].batch == 9){
//         newArr.push(students[key]);
//     }
// }
// console.log(newArr);

        // Method 2 :- for loop
// for (let index = 0; index < students.length; index++) {
//     if(students[index].likesIcecream  && students[index].batch == 9){
//         newArr.push(students[index]);
//     }
// }
// console.log(newArr);