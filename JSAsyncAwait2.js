const oreganoAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Oregano  added");
            resolve();
        }, 8000);
    })
}

const chefRecived = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Chef recived the order and start preparing");
            resolve();
        }, 2000);

    })
}

const pizzaSauceAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza sauce added");
            resolve();
        }, 2000);
    })
}

const firstLayer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First layer of cheeze added");
            resolve();
        }, 10000);
    })
}

const toppingAdded = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Topping added");
            resolve();
        }, 12000);
    })
}
const secondLayer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second layer of cheeze added");
            resolve();
        }, 2000);
    })
}

const pizzaBaked = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza Baked");
            resolve();
        }, 5000);
    })
}

const packageRecivedAtCounter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Package Recived at counter")
            resolve();
        }, 15000);

    })
}

const excuteOder = async () => {

    try{
    console.log("Oder Placed :- ");
    await chefRecived()
    await pizzaSauceAdded();
    await firstLayer();
    await toppingAdded();
    await secondLayer();
    await pizzaBaked();
    await oreganoAdded();
    await packageRecivedAtCounter();
    console.log("The oder is ready and handed over to the zomato guy! ")
    }
    catch(err){
        console.log("eoore");
    }
}
excuteOder();