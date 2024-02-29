// // let amount = prompt("Enter the Amount by seperating with space").split(" ");

// for(let i = 0; i < 5; i++ ){
//     if(amount[i] > 200000){
//         amount[i] += (amount[i]*0.1 );
//         amount[i] -= amount[i]*0.02;
//     }else if(amount[i] > 100000){
//         amount[i] += (amount[i]*0.05 );
//         amount[i] -= amount[i]*0.0005;
//     }
// }

// console.log(amount);


function calculateInterset(){
    let bankBalance1 = Number(document.getElementById("bank-balance-1").value)

    let bankBalance2 = Number(document.getElementById("bank-balance-2").value)

    let bankBalance3 = Number(document.getElementById("bank-balance-3").value)

    console.log(bankBalance1,bankBalance2,bankBalance3);
}