// let obj = {
//     name : "Rama",
//     batch : 10,
//     likesReadingBooks : true,
//     sayHi : function (){
//         console.log("Hi");
//     }
// }

// sengtantic

let obj = {
    name: "Rama",
    batch: 10,
    likesReadingBooks: true,
    sayHi: () => {
        console.log("Hi");
    }
}

// obj.sayHi();

//       "this" keyword  -> refers to the owner of that  object(***)
//         this is global scope refers to your window object, any property / method object can be accessed directy.

let ram = {
    name: "Ram",
    batch : 10,
    likesReadingBooks: false,
    sayHi: function () {
        console.log("Hi");
    },
    sayBatchNo: function () {
        console.log("I am from batch no " + this.batch);
    },
    sayIntro : function (){
        console.log(`My name is ${this.name}. I am from batch ${this.batch}, and I ${this.likesReadingBooks ? "likes reading books" : "doesn't likes reading books"}.`);
    }
    // batch : 10,
}

// ram.sayBatchNo();
// console.log(ram);

        // Exercise Q
        ram.sayIntro();
        alert("hello");