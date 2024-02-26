var displayArea = document.getElementById("display");

function isOperator(buttonText) {
    if (buttonText == '+' || buttonText == '-' || buttonText == '%' || buttonText == '/' || buttonText == '*') {
        return true;
    } else {
        return false;
    }
}

function buttonClicked(buttonText) {
    if(displayArea.innerText.length >= 24){
        return;
    }
    if (buttonText != 'clr' && buttonText != 'del' && buttonText != '=') {
        if (displayArea.innerText === '0') {
            if (buttonText != '0' && buttonText != '00') {
                if (buttonText == "." || isOperator(buttonText)) {
                    displayArea.innerText = '0' + buttonText;
                } else {
                    displayArea.innerText = buttonText;
                }
            } else {
                displayArea.innerText = '0';
            }
        } else {
                if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator((buttonText))) {
                    displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
                } else {
                    if(buttonText != '.'){
                    displayArea.innerText = displayArea.innerText + buttonText;
                    }else if(!displayArea.innerText.includes('.')){
                        displayArea.innerText = displayArea.innerText + buttonText;
                    }
                }
        }
    } else {
        if (buttonText === 'clr') {
            displayArea.innerText = "0";
        } else if (buttonText === 'del') {
            displayArea.innerText = displayArea.innerText.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                displayArea.innerText = eval(displayArea.innerText);
            } catch (error) {
                displayArea.innerText = '0';
            }
        }
    }
}




// function buttonClicked(buttonText) {
//     if (buttonText === 'clr') {
//         displayArea.innerText = "0";
//         return;
//     }
//     if (buttonText === 'del') {
//         displayArea.innerText = displayArea.innerText !=='0' ? displayArea.innerText.slice(0, -1) : '0';
//         return;
//     }
//     if (buttonText === '=') {
//         try {
//             displayArea.innerText = eval(displayArea.innerText);
//         } catch (error) {
//             displayArea.innerText = '0';
//         }
//         return;
//     }




//     if (displayArea.innerText.length >= 24) {
//         return;
//     }

//     if ((buttonText == "0" || buttonText == '0') && displayArea.innerText === '0') {
//         return;
//     }

//     if (buttonText == "." || isOperator(buttonText) && displayArea.innerText === '0') {
//         displayArea.innerText = '0' + buttonText;
//         return;
//     }

//     if (isOperator(buttonText) && isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && displayArea.innerText != '0') {
//         displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
//         return;
//     }

//     if (displayArea.innerText === '0') {

//         displayArea.innerText = buttonText;
//     }
//     else {
//         if (buttonText != '.') {
//             displayArea.innerText = displayArea.innerText + buttonText;
//         } else {
//             displayArea.innerText = displayArea.innerText + buttonText;
//         }
//     }
// }