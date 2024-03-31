let studentDataRecivedFromAPI = [{
    name: "Siddharth",
    batch: 10,
},
{
    name: "Piku",
    batch: 9,
},
{
    name: "Shagun",
    batch: 9,
},
{
    name: "Preeti",
    batch: 9,
},
{
    name: "Shivani",
    batch: 10,
}]

/*        Promise Chaining : (When you are returning a value from .then() method - i-t is again promise which needs to be handled by another .then()                              chaining)
                1. When the first .then handler returns another promise which needs to handled by chaining another . then()
                2. Return any data from first .then and that data can be caught by the .then() handler which is chained to the first one.

*/

//Problem statement - return only those students from batch 10
const fetchStudentDataPromise = () => {
    return new Promise((resolved, rejected) => {
        console.log("Fetching data from the Server ");
        setTimeout(() => {
            console.log("Data fetch sucessfully after 6's");
            resolved(studentDataRecivedFromAPI);
        }, 6000);
    })
}

const processData = (resultFromAPI) => {
    console.log("Processing data now....");
    return new Promise((resolved, rejected) =>{
        setTimeout(() => {
            // resolved("Data processed sucessfully after 6's");
            let studentOfBatch10 = resultFromAPI.filter(student => student.batch === 10).map(student => student.name);
            resolved(studentOfBatch10);
        }, 4000);
    })
}

fetchStudentDataPromise().then(res => {
    return processData(res);
}).then(processData => {
    console.log("Student of batch 10 "+ processData.join(','));
}).catch(rejectedMeassage => {
    console.log(rejectedMeassage);
})

fetchStudentDataPromise; 

// const fetchStudentData = () => {
//     fetchStudentDataPromise().then((res) => {
//         console.log(studentDataRecivedFromAPI.filter((student) => student.batch === 10));
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// fetchStudentData();

// Promise Chaining(****)

// const fetchStudentData = () => {
//     fetchStudentDataPromise().then(() => {
//         return studentDataRecivedFromAPI.filter(student => student.batch === 10);
//     }).then((studentInfo) => {
//         console.log(studentInfo);
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// fetchStudentData();

// console.log(fetchStudentData());

/*______________________________________________________________________________ */

// let promise = new Promise((resolved,rejected) =>{
//     resolved('A');
//     // rejected("1");
// });

// promise.then(resolvedMessage =>{
//     return resolvedMessage + " + B";
// }).then(updated =>{
//     return updated + " + C ";
// }).then(updated =>{

//     console.log(updated);
// }).catch(rejectedMessage => {
//     console.log(rejectedMessage);
// })

// promise;

/*________________________________________________________________________________ */

/*
    Problem statement - Fetch data from the server (6s) and then process it (4s) (Both are asynchronous)
    Create two promises - 1. fetchDataFromServer, 2. processData
*/

// const fetchDataFromServer = () => {
//     console.log("Fetching data from the server");
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             resolved(resolved);
//         }, 6000);
//     })
// }

// const processData = () => {
//     console.log("Procesing data now")
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             resolved("Data processed after 4's  ");
//         }, 4000);
//     })
// }

// Handaling seperatly is incorrect

// fetchDataFromServer().then(resolvedMessage =>{
//     console.log(resolvedMessage);
// }).catch(rejected => {
//     console.log("rejected Message");
// })

// processData().then(resolvedMessage =>{
//     console.log(resolvedMessage);
// }).catch(rejected => {
//     console.log("rejected Message");
// })


// fetchDataFromServer().then(resolvedMessage =>{
//     console.log(resolvedMessage);
//     return processData();
// }).then( resolvedMessage2 => {
//     console.log(resolvedMessage2);
// }).catch(rejected => {  
//     console.log("rejected Message");
// })