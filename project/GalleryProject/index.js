let pannel_1 = document.getElementById("pannel1");
let pannel_2 = document.getElementById("pannel2");
let pannel_3 = document.getElementById("pannel3");
let pannel_4 = document.getElementById("pannel4");
let pannel_5 = document.getElementById("pannel5");

var x = document.getElementsByClassName("pannel");
    console.log(x);

function resetActive(){
    pannel1.classList.remove("active");
    pannel2.classList.remove("active");
    pannel3.classList.remove("active");
    pannel4.classList.remove("active");
    pannel5.classList.remove("active");
}

// function controlPannel(pannelNo){
//     resetActive();
//     switch (pannelNo){
//         case 1 : 
//             pannel1.classList.add("active");
//             break;
//         case 2 : 
//             pannel2.classList.add("active");
//             break;
//         case 3 : 
//             pannel3.classList.add("active");
//             break;
//         case 4 : 
//             pannel4.classList.add("active");
//             break;
//         case 5 : 
//             pannel5.classList.add("active");
//             break;
 
//     }
// }

function controlPannel(pannelNo){
    resetActive();
    document.getElementById(pannelNo).classList.add("active");
}