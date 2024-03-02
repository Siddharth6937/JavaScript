// let arr = [1,4,6,2,8,7,9,3,5];

        //1 forEach :- Itreate through the element of an array

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
// let arr2 = ["Siddharth","Aniket","Shagun","Priyanka","Piku"];

// arr2.forEach(function(element,index){
//     console.log(index,element);
// });

            // Arrow function  in forEach

// arr2.forEach((element,index) => {
//     console.log(index,element);
// });


// let fun = function (element,index){
//     console.log(element,index);
// }


// arr2.forEach(fun);


             /*---------------------------------*/


        // 2 Filter :- It loop through each element and return the array of elements which match the specified condition 
        //         - Loop through each element of the array
        //          - Return a condition check
        //          - Return only those elements which match the specifiied condition

 
    //     let arr = [5,10,24,24,20,25];

    //    let x =  arr.filter( function (element, index){
    //         return element % 5 != 0;
    //     })

    //     console.log(x);

            //Exercise

            // let arr = ["Akash", "Naveen", 'Rama', "Rambali","Shweta"];

            // let x = arr.filter((element) => {
            //     return element.length == 6;
            // })
            // console.log(x);


/*
            3 .every() :- Return true if all elements in that array satisfy the every condition
                        - Returns a condition
                        - If all elements satified the sepecified condition, returns true, esle false
 */


                        let arr = [300,100,400,2220,550];

                        let x = arr.every(element => {
                            return element % 10 == 0;
                        })

                        console.log(x);

                        // Trough for of method//

                        let y = true;
                        for(el of arr){
                            if(el % 10 != 0){
                                y = false;
                                break;
                            }
                        }

                        console.log(y);