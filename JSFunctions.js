// Function :- It is the block of code ot perform a specific task
// calculate();
// function calculate(){
//     console.log(2+19);
// }

// function calculate(a,b){
//     console.log(a+b);
// }

// calculate("Sinfh", 1);

// function calculate(a,b,operator){
//     console.log(eval(a + operator + b ));
// }

// calculate(4,4,'*');


            //  Default constructor

        function cal(a = 0, b = 0, c = 0, d = 0){
            console.log(a+b+c+d);
        }

        cal(1,2,3);

        // Self invoking function

        (function sid(){
            console.log("hello");
        })()



        