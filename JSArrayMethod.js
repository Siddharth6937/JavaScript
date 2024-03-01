let arr = [1,4,6,2,8,7,9,3,5];

        // forEach :- Itreate through the element of an array

/*
    .forEach(function(element , index){
    })

    .forEach((element , index) =>{

    })
*/

// arr.forEach( function(element,index){
//     console.log(element,index);
// });

// console.log(" ");
// console.log(" ");
let arr2 = ["Siddharth","Aniket","Shagun","Priyanka","Piku"];

// arr2.forEach(function(element,index){
//     console.log(index,element);
// });

            // Arrow function  in forEach

arr2.forEach((element,index) => {
    console.log(index,element);
});

