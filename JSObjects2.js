// let piku = {
//     fullName : "Priyanka Kumari",
//     age : 22
// }

//     // Adding new key likes  with value Dancing to piku.

// piku.likes = "Dancing";


// console.log(piku);


//Arrays as value inside Objects

let bank ={
    branch : "Mumbai",
    ifcCode : 12345,
    name : "India Bank",
    isOperational : true,
    accountAvailables : ["Saving" , "current", "PPF"]
}
// console.log(bank.accountAvailables[0]);

// Nested object = Object is value inside another object

// let piku = {
//     fullName :"Priyanka Kumari",
//     age : 24,
//     marks : {physics : 98, Chemistry : 84,Maths : 87, computer : 89, English : 90,}

// } 

// console.log(piku.marks.Chemistry);
// console.log(piku[1]);


    // Objects in Arrays

    let piku = {
        fullName :"Priyanka Kumari",
        age : 24,
        batch : 10,
        likesDancing : true
    }
    let Preeti = {
        fullName :"Preeti Kumari",
        age : 24,
        batch : 10,
        likesDancing : true
    }
    let Sid = {
        fullName :"Sid kumar",
        age : 24,
        batch : 10,
        likesDancing : true
    }
    let Sidddharth = {
        fullName :"Siddharth Kumar",
        age : 24,
        batch : 10,
        likesDancing : true
    }

    let students = [
        {
            fullName :"Priyanka Kumari",
            age : 24,
            batch : 10,
            likesDancing : true
        },
        {
            fullName :"Preeti Kumari",
            age : 24,
            batch : 10,
            likesDancing : true
        },
        {
            fullName :"Sid kumar",
            age : 24,
            batch : 10,
            likesDancing : true
        },
        {
            fullName :"Siddharth Kumar",
            age : 24,
            batch : 10,
            likesDancing : true
        }
    ];


    console.log(students[1].batch);


    // Exercise 

    let siddharth = {
        name : {
            firstName : "Siddharth",
            middleName : "Kumar",
            lastName : "Singh"
        },

        age : 20,
        companyApplied : ["Google", "Amazon"] 
    };

    console.log(siddharth.name.lastName);