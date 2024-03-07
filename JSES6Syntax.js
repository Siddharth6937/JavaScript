// 1.Templates  Strings
// console.log(`hello`);   -starts and ends with backtiks(`), expression are sepicified inside ${};
//                          - and can we write multi-line Strings


let siddharth = {
    firstName: "Siddharth",
    lastName: "Kumar",
    age: "22",
    likes: "Nothing"
}


let piku = {
    name: "Priyanka Kumari",
    batch: "22",
    likesReadingBooks: true
}


// console.log(`My name is ${piku.name}.
// I am from batch ${piku.batch}, 
// and I ${piku.likesReadingBooks ? "likes reading books" : "doesn't likes reading books"}.`);


//  2. let,const
    //  let -> scope
    // const -> scope + constant value

// 3.Arrow function 
    // const x = () => {
    //     console.log('x');
    // }

    // const y = () => console.log("y");

// 4.Default parameters

    // function abc(a = 0, b = 0){
    //     console.log(a+b);
    // }
    // abc(3+8);

// 5. Power of Opreator
    // console.log(2**4);

// 6. Spread operator
    let arr1 = [2,1,4,3,5];
    let arr2 = [12,10];
    let arr3 = [6,7,8];
    // let arr = arr1.concat(arr2,arr3);
    console.log(arr1);

    console.log(...arr1,...arr2,...arr3);

    let arr4 = [...arr1];
    console.log(arr4);

