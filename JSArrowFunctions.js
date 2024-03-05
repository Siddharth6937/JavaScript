/*
    () = {

    }
 */
// function ca(){
//     console.log("hello")
// }

// let x = function (a){
//     console.log("hwllo"+a);
// }
    // Single line Expression

    // let calculate = (a,b) => a+b;

    // console.log(calculate(5,5));

    // let calc = (a,b) => {
    //     console.log(a+b)
    // }

    // calc(5,6);

      // Exercise 

      let ex = (a) => {
        let y = a[0].toUpperCase() + a.slice(1);
        return y;
      }

      let ex1 = (a) => a[0].toUpperCase() + a.slice(1);

      console.log(ex("apple"));
      console.log(ex1("apple"));


/*
      Arrow functions are not hoisted 
      you don't have access this keyword inside the arrow function
*/