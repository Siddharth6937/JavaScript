// console.log("Hello World")
// let sum = eval("1+5sid");
// console.log(sum);

// try{
    // code with probable runtime errors
// }catch(err){
    //if any error exists,it will be caught by the catch block
// }

// try -> if no error  ocurred
// catch -> errors exists, has an error property and handles the caught error
// if no error -> only try block works, else catch block works for all errors thrown (***)
// finally -> Use this block to run this code in both cases (failure/ success)(***)
// throw -> can be used to create and report user defined errors

// console.log("Hello World")
// try{
//     let sum = eval("1+5");
//     console.log(sum);
// }catch(err){
//     console.log(err);
// }finally{
//     console.log("Finally");
// }

// console.log("hello");


let input = -13;

try{
    if(input < 0){
        throw new Error("Negative number not valid");
    }
}catch(err){
    console.log(err);
}

console.log("hello");