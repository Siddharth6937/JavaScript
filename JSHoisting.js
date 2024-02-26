        
/* Hoisting :-
    -   JS will hoist all the declarations to the top of the code. (****) 
    -   This is aplicable to all identifier decalaration made by var, let and const.
    -   Identifiers declared using Let and const are also hoisted, but you cannot access those before intialization. - (temporal dead zone)
*/

    /*______________________________________*/

        // var x
        // console.log(x);
        // var x = 5;
        // console.log(x);

    /*______________________________________*/
   
    console.log(x);
    let x = 9;