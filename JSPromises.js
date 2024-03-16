/*
    Promises 
        - Handle asynchronous code.
        - Can be used to avoid callback hell scenario.
        - Two properties - state and result (result only in case of resolved/rejected);
        
    Promise States -
        1. pending
        2. resolved (Fullfilled)
        3. Rejected

        2 ways :-
            pending -> resolved -> setelled
            pending -> rejected -> setelled

            let promise = new Promise((resolved, rejected) =>{
                // 'resolved'-> method for fulfilling the promise (can send a reslovedMesssage Optional)
                // 'catch'   -> method is for rejecting the promisse (can send a rejectedMeassge is Optional) 
            })

            .then method callback -> for executing in case the promise was resolved. (can have a parameter for resolved message - Optional)
            .catch method callback -> for executing in case the promise was rejected. (can have a parameter for rejected message - Optional)

*/
    // let a = 5;
    // let b = 5;

    // let promise = new Promise((resolved, rejected) => {
    //     if(a === b){
    //         resolved("The values of a & b are equal");
    //     }else {
    //         rejected("The values of a & b are not equal");
    //     }
    // });

    // promise.then((resolvedMessage)=>{
    //     console.log("Resolved Message was "+resolvedMessage);
    // }).catch((rejectedMessage) => {
    //     console.log("Reject Message was "+rejectedMessage);
    // });
    
 /*___________________________________________________________________________________ */

    // let promise = new Promise((resolved, rejected) => {
    //    setTimeout(()=>{
    //     resolved("API fetched Succesfully");
    //    },8000);
    // });

    // let promise = new Promise((resolved, rejected) => {
    //     setTimeout(()=>{
    //      rejected("404 FILE NOT FOUND");
    //     },8000);
    //  });

    //     console.log(promise);
     
    // promise.then((resolvedMeassage) => {
    //     console.log("[resolved] "+resolvedMeassage);
    // }).catch((rejectedMeassge)=>{
    //     console.log("rejectedMeassge"+rejectedMeassge);
    // });
   
    // setTimeout(() => {
    //     console.log(promise);
    // },9000)
     
    /*___________________________________________________________________________________ */

    const fetchProfileInformation = () => {
        return new Promise((resolved, rejected) =>{
            setTimeout(() => {
                resolved("[resolved]");
            },3000);
        }) 
    }

    fetchProfileInformation().then((resolvedMessage => {
        console.log("Resolved "+resolvedMessage);
    })).catch(rejectedMeassage => {
        console.log("Rejected "+rejectedMeassage)
    })