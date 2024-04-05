const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("[Promise 1] I got resolved after 5s ");

    }, 5000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("[Promise 2] I got resolved after 3s ");

    }, 3000)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("[Promise 3] I got resolved after 8s ");

    }, 8000)
})

/*       Promise.all([.., .., ...]);

         - Will only resolve if 'ALL' promises get resolved (can be related to && operator).
         - Overall resolved value will be in an array of resolved values from all promises.
         - rejeted value will be the first rejected value .
         - Overall promise resolve time = resolve time of promise which takes the largest time.
*/

// Promise.all([promise1, promise2, promise3])
//     .then(resolvedMessage => {
//         console.log(resolvedMessage);
//     })
//     .catch(err => {
//         console.log(err);
//     })

/*_________________________________________________________________________________*/

/*      Promise.any()
        - Will resolve if a 'SINGLE' promise get resolved (can be related to ( || )logical or Operator).
        - Overall resolved value = Resolved value of first resolved promise.
        - rejected promises will be skiped, if all promise are rejected - Promise.any will be rejected (catch handler will work).
        - Overall promise resolve time = resolve time of promise which takes the minimum time to resolve.

*/

    Promise.any([promise1,promise2,promise3])
    .then((res) => console.log(res))
    .catch((err) => console.log("ALL promise are rejected"))

