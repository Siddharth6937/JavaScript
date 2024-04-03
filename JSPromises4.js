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

// Promise.all([.., .., ...]);

// Promise.all([promise1, promise2, promise3])
//     .then(resolvedMessage => {
//         console.log(resolvedMessage);
//     })
//     .catch(err => {
//         console.log(err);
//     })
