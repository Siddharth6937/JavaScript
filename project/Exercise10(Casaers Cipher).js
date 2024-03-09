const lookup = {
    A :'N',B : 'O', C : 'P', D : 'Q', E : 'R', F : 'S' , G :'T' , H : 'U',
    I :'V', J : 'W', K :'X', L : 'Y', M : 'Z', N : 'A', O  : 'B', P : 'C', 
    Q : 'D' , R : 'E' ,S : 'F' ,T : 'G' ,U : 'H' ,V  : 'I', W : 'J',X : 'K', Y : 'L', Z :'M', ' ' : ' ',
}

        // Method 1

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

        // Method 2

// const decode = (encodedStr) => encodedStr.split("").map(element => lookup[element]).join("");


console.log(decode("SERR YBIR NPPVBWBO"));
console.log(encode("FREE LOVE ACCIOJOB"));