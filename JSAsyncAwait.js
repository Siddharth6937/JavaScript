let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("API fechted successfully");
    }, 8000);
});

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
/*___________________________________________________________*/
// async function handleAsyncCode () {}
// const handleAsyncCode = async function (){}
// const handleAsyncCode = async () => {}
/*___________________________________________________________*/

// ASYNC :- Attach this keyword to any function - To make ashynchronous / handle ashyncrouos code.
// AWAIT :- Waits for resolved state of promise (returns resolved value of promise).
// await should always be used in async function.

/*___________________________________________________________*/

// async function handleAsyncCode() {
//     try {
//         console.log("Handling Asyncronous code started");
//         const resolvedMessage = await promise;
//         console.log("[Resolved] " + resolvedMessage);
//     }
//     catch (rejectedMessaage) {
//         console.log("[Rejected] " + rejectedMessaage);
//     }
// }

// handleAsyncCode();
/*___________________________________________________________*/

let fetchDataFromServer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("API fechted successfully");
    }, 8000);
});

let processData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data processed successfully");
    }, 4000);
});

const fetchDataAndProcess = async () =>{
    try{
    console.log("Fetching data from the server");
    let res = await fetchDataFromServer();
    console.log(res);

    console.log("Processing data");
    let res2 = await processData();
    console.log(res2);
    } catch(err){
        console.log(err);
    }
}

fetchDataAndProcess();