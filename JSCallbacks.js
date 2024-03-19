// Nested/blocks have acces to the outer scope variables, because both lies in the lexical scope 

    // arr.map(() =>{})
    //arr.forEach(()=>{})
    //arr.filter(() => {})
/*
    Higher order function :- If one or more then one function is declared and return fron another  function.
                           - If a function is passed as aragument in  a function (callback);
*/
/*
    Higher order function :- 
    1 .Takes onther function as an argument(callback)
    2. Nest/Return another function(Clouseres)
 */

    // Callbacks :- When a function defenation is passed as an argument to another function (asynchronous in nature)

/*
        Closures :
                - Inner function have access to the  outer scope variables which are present int the (lexical scope) / (lexical environment)
                - refers to Bundddle of inner function along with its lexical environment.
                - Inner function continue to have access scope variables even after the outer scope is finished
*/
// function abc(){
//     firstName = "Siddharth";
//     lastName = "Singh";

//     function def(){
//         return firstName+" "+lastName;
//     }
//     console.log(def());

//     console.log("abc");
// }
// abc();


    // Outer function
const abc = () =>{
    firstName = "Siddharth";
    lastName = "Singh";
        //Inner function
    return () => { console.log(firstName+" "+lastName); }
}
    // Outer  function invoked - return the inner function and stored in def.
let def = abc();
    // Inner function invoked
 def();
