
const chiefRecived = (oderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Chief recived";

            resolve(oderNumber);
        },2000);
    })
}

const pizzaSauceAdded = (oderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Pizza sauce added";
    
            resolve(oderNumber);
        },10000);
    })
}
const firstLayerOfCheeseAdded = (oderNumber) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "First Layer of cheese added";
           
           resolve(oderNumber);
        },5000);
    })
}

const toppingAdded = (oderNumber) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Topping Added";
           
           resolve(oderNumber);
        },12000);
    })
}

const secondLayerOfCheeseAdded = (oderNumber) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Second Layer of cheese added";
           
           resolve(oderNumber);
        },2000);
    })
}

const pizzaBaked = (oderNumber) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Pizza baked";
           
           resolve(oderNumber);
        },15000);
    })
}

const oreganoAdded = (oderNumber) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.getElementById(oderNumber).innerText = "Orgeano added and Pizza baked";
       
           resolve(oderNumber);
        },8000);
    })
}

const packageReceivedAtCounter = (oderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            document.getElementById(oderNumber).innerText = "Package recived at counter";
            
            resolve(oderNumber);
        },2000);
    })
}