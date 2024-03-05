
// Object Constructor :-  Templates / Blueprint for objects

function Stundents(name, batch, palce, sayHi){
    this.name = name,
    this.batch = batch,
    this.palce = palce,
    this.sayHi = sayHi

};

let sayHi = function(){
    console.log("Hello");
}

let papu = new Stundents("pappu",10,"Kolkata");

let sid = new Stundents("siddharth",10,"Ramghar",sayHi);
let piku = new Stundents("priyanka", 10,"Bokaro");
let puja = new Stundents("Puja",9,"Kolkata");

sid.sayHi()
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