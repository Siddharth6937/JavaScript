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

/*------------------------------------------------------------------*/

// function calculateInterset(){
//     let bankBalance1 = Number(document.getElementById("bank-balance-1").value);
//     let bankBalance2 = Number(document.getElementById("bank-balance-2").value);
//     let bankBalance3 = Number(document.getElementById("bank-balance-3").value);

//     let updatedBankBalance1 = document.getElementById("updated-bank-balance-1");
//     let updatedBankBalance2 = document.getElementById("updated-bank-balance-2");
//     let updatedBankBalance3 = document.getElementById("updated-bank-balance-3");


//     let bankBalances = [bankBalance1, bankBalance2, bankBalance3];


//     for(let i = 0; i < bankBalances.length; i++){

//         bankBalances[i] = Number(bankBalances[i]);

//         if(bankBalances[i] > 200000){
//             bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1;
//             bankBalances = bankBalances[i] - bankBalances[i] * 0.002;
//         } else if(bankBalances[i] > 100000 ){
//             bankBalances[i] = bankBalances[i] +  bankBalances[i] * 0.05;
//             bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.0005  
//         }else{
//             bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03;
//         }
//     }

//     console.log(bankBalances);

//     updatedBankBalance1.value = bankBalances[0];
//     updatedBankBalance2.value = bankBalances[1];
//     updatedBankBalance3.value = bankBalances[2];
// }

/*-------------------------------------------------------------*/

function calculateInterset() {
    let inputBalanceNodes = document.getElementsByClassName("input-balance");
    let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");

    for (let i = 0; i < inputBalanceNodes.length; i++) {
        temp = Number(inputBalanceNodes[i].value);

        if (temp > 200000) {
            temp = temp + temp * 0.1;
            temp = temp - temp * 0.002;
        } else if (bankBalances[i] > 100000) {
            temp = temp + temp * 0.05;
            temp = temp - temp * 0.0005
        } else {
            temp = temp + temp * 0.03;
        }

        displayUpdatedBalances[i].value = temp;
    }

}
