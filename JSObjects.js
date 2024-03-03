// Objects :- Collection of elements with named indexes.
// Use {}, key values pairs are separated by :, separate key-value pairs with commas

// let piku = {
//     Name : "Priyanka",
//     Place : "Bokaro",
//     age : 21,
//     course : "B.tech"
// }

// Properties 
// -keys() in objects which are used only for executing  purpose are known as Methods

        // Accessing the values of an object using keys

// console.log(piku.age);

// console.log(piku["course"]);


let car = {
    passenger : 5,
    wheels : 4,
    brand : "Maruti Suzuki",
    color : "blaack"
}


let siddharth = {
    firstName : "Siddharth",
    lastName : "Kumar",
    age : "22",
    likes : "Nothing"
}


let piku = {
    firstName : "Priyanka",
    lastName : "Kumari",
    age : "22",
    likes : "Dancing"
}

// console.log(siddharth.firstName +" "+  siddharth.lastName+" is "+ siddharth.age+" years old "+ (siddharth.likes ? "likes" : "dons't likes")+" "+"Singing");

        // Manipulating data by using Key

piku.likes = "Dancing and Cooking";

// console.log(piku);

        // JSON :- JavaScript Object Notation 

        // XML :- Extensible Markup Language

        let str ={ "passenger" : 5, "wheels": 4, "brand" : "Maruti_Susuki", "color" : "black"}

        //JSON.stringify() -> convert object to String (***)
        //JSON.parse() -> convert to String to  objects(***)


        let obj = JSON.stringify(str);

        console.log(obj);