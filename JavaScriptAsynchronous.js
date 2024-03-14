/*
 Synchronous code runs in sequence.This means that each operation must wait for the previous one to complete before executing.

 Asynchronous code runs in parellel. This means that an operation can occur while another one is still being processed.

*/

/*
        setTimeout :- Used to execute the block of code after certain time interval   
        setTimeout(function(){
            // code...
        }, milliseconds )
 */

        // setTimeout( () => {
        //     console.log("hi");
        // },5000);

        // console.log(1);
        // console.log(2);
        // setTimeout(()=>{
        //     console.log(3);
        // },0);
        // console.log(4);
        // console.log(5);

/*
        setInterval :- Used to execute the block of code repeatedly after fixed time intervals
        setInterval(function(){
            // code...
        }, milliseconds )
 */
 
        // setInterval(()=>{
        //     console.log("Hi");
        // },5000);

        // let date = new Date();

        setInterval(()=>{
            console.log(new Date().toLocaleString().replace(',',' '));
        },1000)