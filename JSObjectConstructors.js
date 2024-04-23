
// Object Constructor :-  Templates / Blueprint for objects

function Stundents(name, batch, palce, sayHi){
    this.name = name,
    this.batch = batch,
    this.palce = palce,
    this.sayHi = sayHi

};

Stundents.prototype.contry="India";

const student1 = new Stundents("Name", "batch", "place", "hi");

console.log(student1.name);

let sayHi = function(){
    console.log("Hello");
}
let papu = new Stundents("pappu",10,"Kolkata");

let sid = new Stundents("siddharth",10,"Ramghar",sayHi);
let piku = new Stundents("priyanka", 10,"Bokaro");
let puja = new Stundents("Puja",9,"Kolkata");

// sid.sayHi()
// console.log(piku);
// console.log(puja);



// let pappu = {
//     name : "Pappu",
//     batch :11,
//     palce : "Kolkata",
// }

// let piku = {
//     name : "Priyanka",
//     batch :10,
//     palce : "Bokaro",
// }

// let sid = {
//     name : "Siddharth",
//     batch :10,
//     palce : "Ramghar",
// }

// console.log(new String(4));
// console.log(new Number("567"));

// let date = new Date(2024, 2, 6, 22,0,0);

// console.log(date);


        // Inbuild object cunstructors

        // let  num = new Number(6);
        // console.log(num);
        // console.log(num.valueOf());

        // let str =  new String("Siddharth");
        // console.log(str);
        // console.log(str.valueOf());

            // Inbuilt Object

/*
        let x = 550.1;

        // Math.trunc :- Return only integer part
        console.log(Math.trunc(x));  

        // Math.floor :-  Returns the nearest value which is lesser than the value
        console.log(Math.floor(x));  

        // Math.ceil :- Returns the nearest value which is greater than the value
        console.log(Math.ceil(x));  
*/

        // let x = 25;
        // Math.sqrt :- It return the the square root of the number
        // console.log(Math.sqrt(x)); 


        // Math.PI :- return pie value
        // console.log(Math.PI);

        // console.log(0.1 + 0.2 === 0.3);       // It return false;
        
        // Math.exp :- Exponential
        // console.log(Math.exp(2));

        //Math.pow :- power of 

        // console.log(Math.pow(2,5));
        // console.log(2**5);


        // Math.max :- returns the maximum value out of  the values provided
        // console.log(Math.max(4,5,6,7,8,9,10));
        // Math.min :- returns the minimum value out of the values provided
        // console.log(Math.min(4,5,6,7,8,9,10));