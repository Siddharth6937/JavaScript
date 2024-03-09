let vashnavi = {
    name : "Vashnavi",
    isGraduate : true,
    hobbies : ["dancing","reading","cooking"],
    noOfCompanniesApplied : 4
}

    // Methods :
    //Object.keys() :- Returns an array of all keys present in the object.
    //Object.values() :- Returns an array all values present in the object.
    ///Object.entries() :- returns an array of arrays with length 2 (keys, values).

// console.log(Object.keys(vashnavi));
// console.log(Object.values(vashnavi));
// console.log(Object.entries(vashnavi));


let siddharth = {
    name : {
        firstName : "Siddharth",
        middleName : "Kumar",
        lastName : "Singh"
    },

    age : 20,
    companyApplied : ["Google", "Amazon"] 
};

console.log(Object.keys(siddharth.name));


// for (let key in vashnavi) {
//    console.log(key, vashnavi[key]);
// }


