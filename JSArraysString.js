let arr = ['pikku', 1, true, 'siddharth'];
// console.log(arr);
// console.log(arr.toString());

            // .join() -> convert an Array to String and Specific the delimiter && it will not cause any changes to the original array.(***)

// console.log(arr.join("_"));

            // .split(" ") -> converts string to array with specifice delimeter

// let str = "Piku-Siddharth-Priyanka-Kumari"
// console.log(str.split("-"));
// console.log(str);

            // .reverse(); -> it will reverse the order of the element
arr.reverse();
console.log(arr);

let str = "javascript + HTML + CSS + BootStrap";

console.log(str.split("").reverse().join(""));

