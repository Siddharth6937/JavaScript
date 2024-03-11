let passwordStoredInDB = '';
let signupInputPasswordField = document.getElementById("sign-up-input");
let singupInvalid = document.getElementById("sign-up-Invalid");
let singupValid = document.getElementById("sign-up-valid");
let loginPasswordFeild = document.getElementById("login-input");
let logVaild = document.getElementById("login-valid");
let loginVaild = document.getElementById("login-invalid");


const lookup = {
    A :'N',B : 'O', C : 'P', D : 'Q', E : 'R', F : 'S' , G :'T' , H : 'U',
    I :'V', J : 'W', K :'X', L : 'Y', M : 'Z', N : 'A', O  : 'B', P : 'C', 
    Q : 'D' , R : 'E' ,S : 'F' ,T : 'G' ,U : 'H' ,V  : 'I', W : 'J',X : 'K', Y : 'L', Z :'M', ' ' : ' ',
    a : 'n' ,b : 'o' ,c : 'p' ,d : 'q' ,e : 'r' ,f : 's' , g : 't' , h : 'u',
    i : 'v' ,j : 'w' ,k : 'x' ,l : 'y' ,m : 'z' ,n : 'a' ,o : 'b' ,p : 'c' ,
    q : 'd' ,r : 'e' ,s : 'f' , t : 'g',u : 'h' , v : 'i' ,w : 'j' , x : 'k', y : 'l', z : 'm',
    0 : '5',1 : '6',2 : '7',3 : '8',4 : '9',5 : '0',6 : '1',7 : '2',8 : '3',9 : '4'
}


const encode = (inputString) =>{
    const lookupKeys = Object.keys(lookup);
    const lookupValues = Object.values(lookup);
    const codeArr = inputString.split("");
    let encodedArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex(element => element === codeArrChar)
        return lookupKeys[index];
    })

    return encodedArr.join(""); 
}

const decode = (encodedStr) => {
    let codeArr = encodedStr.split("");
    let decodedArr = codeArr.map(element => lookup[element]);

    return decodedArr.join("");
}


let signUp = () =>{
    let inputPassword = encode( signupInputPasswordField.value);

    if(inputPassword.length > 5){

    passwordStoredInDB = inputPassword;
    singupValid.style.display = "block";
    singupInvalid.style.display = "none"
    console.log(inputPassword);
    }else {
        singupInvalid.style.display = "block"
        singupValid.style.display = "none";
    }
}

let login = () => {
    let inputPassword = decode(loginPasswordFeild.value);

    if(inputPassword === passwordStoredInDB){
        console.log("ok");
        logVaild.style.display = "block";
        loginVaild.style.display="none";
    }else {
        console.log("not ok");
        loginVaild.style.display="block";
        logVaild.style.display = "none";
    }
} 



