// JavaScript Function Methods - call, apply, bind

/*
   Arrays 
    Properties : length
    Methods : push,pop.,shift unshift,map,filter , forEach etc

 */

/*
   Functions 
    Properties : code , name(optional)
    Methods : call, apply, bind
    
 */

// let ram = {
//     firstName : 'Ram',
//     lastName : 'Charan',
//     batch : 10,
//     displayFullName :function () {
//         return this.firstName + " "+this.lastName;

//     }
// }

// let vashnavi = {
//     firstName : 'Vashnavi',
//     lastName : 'Kumari',
//     batch : 10,
//     displayFullName :function () {
//         return this.firstName + " "+this.lastName;

//     }
// }
// console.log(ram.displayFullName());
// console.log(vashnavi.displayFullName());


function displayFullName() {
    return `${this.firstName} ${this.lastName}`;
}

function greetUser(wish) {
    return `${wish} ${this.firstName} ${this.lastName}`;
}

let ram = {
    firstName: 'Ram',
    lastName: 'Charan',
    batch: 10,
}

let vashnavi = {
    firstName: 'Vashnavi',
    lastName: 'Kumari',
    batch: 10,
}

/*
        (1) Call :- 
            -> Attach object to the function and then invoke 
            -> It invoked immediatly
            -> Arguments for that function are passed separeted by commas after the object
            -> If the no. of parameter in that function is x, we'll pass x+1 arguments (1 arguments for the object to attach)
 */
// console.log(displayFullName.call(ram));
// console.log(displayFullName.call(vashnavi));

// console.log(greetUser.call(ram, "Good Moring"));
// console.log(greetUser.call(vashnavi, "Good Moring"));

/*
        (2) Apply :- 
            -> Attach object to the function and then invoke 
            -> It invoked immediatly
            -> Arguments for that function are passed as Array of values separeted by commas after the object
 */

// console.log(displayFullName.apply(ram,["Good Moring"]));
// console.log(displayFullName.apply(vashnavi,["Good Moring"]));

/*
        (3) Bind :- 
            -> Attach object to the function 
            -> Does not invoke immedialtly rather It will return the updated function with attached object refernce
 */

let displayFullNameWithRamObjectRefernce = displayFullName.bind(ram);
console.log(displayFullNameWithRamObjectRefernce());

let greetUserWithRamObjectRefernce = greetUser.bind(ram);
console.log(greetUserWithRamObjectRefernce("Good Morning! \n"));

let greetUserWithVashnaviObjectRefernce = greetUser.bind(vashnavi);
console.log(greetUserWithVashnaviObjectRefernce("Good Morning! \n"));