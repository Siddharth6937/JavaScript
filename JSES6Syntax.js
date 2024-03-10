// 1.Templates  Strings
// console.log(`hello`);   -starts and ends with backtiks(`), expression are sepicified inside ${};
//                          - and can we write multi-line Strings


// let siddharth = {
//     firstName: "Siddharth",
//     lastName: "Kumar",
//     age: "22",
//     likes: "Nothing"
// }


// let piku = {
//     name: "Priyanka Kumari",
//     batch: "22",
//     likesReadingBooks: true
// }


// console.log(`My name is ${piku.name}.
// I am from batch ${piku.batch}, 
// and I ${piku.likesReadingBooks ? "likes reading books" : "doesn't likes reading books"}.`);

/*___________________________________________________________________ */

//  2. let,const
//  let -> scope
// const -> scope + constant value

/*___________________________________________________________________ */

// 3.Arrow function 
// const x = () => {
//     console.log('x');
// }

// const y = () => console.log("y");

/*___________________________________________________________________ */

// 4.Default parameters

// function abc(a = 0, b = 0){
//     console.log(a+b);
// }
// abc(3+8);

/*___________________________________________________________________ */

// 5. Power of Opreator
// console.log(2**4);

/*___________________________________________________________________ */

// 6. Spread operator
// let arr1 = [2,1,4,3,5];
// let arr2 = [12,10];
// let arr3 = [6,7,8];
// let arr = arr1.concat(arr2,arr3);
// console.log(arr1);

// console.log(...arr1,...arr2,...arr3);

// let arr4 = [...arr1];
// console.log(arr4);

// Spread Opreator using in oject

// let Address = {
//     city : "mumbai",
//     state : "Maharastra",
//     country : "India"
// }

// let piku = {
//     name: "Priyanka Kumari",
//     batch: "22",
//     likesReadingBooks: true,
//     address : {...Address}
// }


// console.error(piku);


// let obj1 = {
//     abc : "abc",
//     def : "def"
// }

// let obj2 = {
//     abc : "123",
//     ghi : "gji",
//     jkl : "jkl"
// }

// let obj3 ={
//     ...obj2,
//     ...obj1
// }

// console.log(obj3);

// 7. includes() - string/array
// let arr = [1, 4, 7, 9];

// console.log(arr.includes(4));
// console.log(arr.includes(5));

// console.log("[1,4,7,9]".includes(""));

/*___________________________________________________________________ */

// 8. Object Property Assigment 
// let a = 5, b = 10;

// let obj1 = { a, b }

// console.log(obj1); 

/*___________________________________________________________________ */

// 9. Object.assign()

// primitive
// let x = 5;
// let y = x;
// console.log(y);

//Non-Primitive

// let obj1 = {
//     a: 5,
//     b: 10
// }
// let obj2 ={...obj1};
// obj2.b = 20;

// console.log(obj1);
// console.log(obj2);

// let arr1 = [1,2];
// let arr2 = arr1;
// arr1[1] = 5;

// console.log(arr2);


// Shallow copy 

// 1.spread Operator

// let obj2 = { ...obj1 };
// obj2.b = 20;
// console.log(obj1);
// console.log(obj2);

// Deep Copy (You should Know the structure to deep copy by using spread operator)
//1. Spread Operator (Not recomened)
//Note :- Using spread operator, you should know the structure to deep copy 


let piku = {
    name: "Priyanka Kumari",
    batch: "22",
    likesReadingBooks: true,
    address: { 
        city : "Bokaro",
        state : "Jharkhand",
        country : "India"
    }
}

// let Priyanka = {
//     ...piku,
//     name : "Priyanka",
//     address :{...piku.address}
// }

// Priyanka.address.city = "Bihar";

// console.log(piku);
// console.log(Priyanka);

    //2. JSON Method

    // let priyanka = JSON.parse(JSON.stringify(piku));
    // Priyanka.address.city = "Bihar"
    // console.log(priyanka);

    // 3.Object.assign()

    // let priyanka = Object.assign({} , piku);
    // priyanka.address.city = "Patna"
    // console.log(priyanka)