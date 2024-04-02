let oderBlocks = document.getElementsByClassName("order-block");
let cardHeader = document.getElementsByClassName("card-header");
let emptyOrderGif = document.getElementById("empty-order-gif");


// const executeOrder = () => {
//     let orderIdInput = document.getElementById("oder-id-input").value;
//     cardHeader[oderNumber].innerText = "Order ID : "+ orderIdInput;

//     oderBlocks[oderNumber].style.display="block";
//     oderNumber++;
// }

const executeOrder = () =>{
    emptyOrderGif.style.display = "none";
    let orderIdInput = document.getElementById("oder-id-input").value;

    if(!orderIdInput.length){
        document.getElementById(orderIdInput).innerText=("Please enter a valid order ID");
        return;
    }

    createNewOrderColumn(orderIdInput);
    document.getElementById(orderIdInput).innerText = "Oder Placed";
    // console.log("Oder Placed");
    chiefRecived(orderIdInput)
    .then((pizzaSauceAdded)).then((firstLayerOfCheeseAdded))
    .then(toppingAdded)
    .then(secondLayerOfCheeseAdded)
    .then(pizzaBaked)
    .then(oreganoAdded)
    .then(packageReceivedAtCounter)
    .then(() => document.getElementById(orderIdInput).innerText="Order Ready")
    .catch((err) => {
        console.log(err);
    })
}

const createNewOrderColumn = (orderIdInput) => {

    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let cardHeaderDiv = document.createElement("div");
    let cardBodyDiv = document.createElement("div");
    let cardTitleH5 = document.createElement("h5");
    let cardTextP = document.createElement("p");
    let cardOderStatusSpan = document.createElement("span");
    let cardButtonA = document.createElement("a");
    let cardFooterDiv = document.createElement("div");

    let cardHeaderDivText = document.createTextNode("Oder ID : "+orderIdInput);
    let cardTitleH5Text = document.createTextNode("Bill Amount: $150");
    let cardTextPText = document.createTextNode("Items: Pizza, Coco-Cola");
    let cardButtonAText = document.createTextNode("cancel Order");
    let  cardFooterDivText = document.createTextNode("Pizaa baked");

    parentDiv.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(cardHeaderDivText);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardTitleH5.appendChild(cardTitleH5Text);
    cardBodyDiv.appendChild(cardTextP);
    cardBodyDiv.appendChild(cardOderStatusSpan);
    cardDiv.appendChild(cardButtonA);
    cardOderStatusSpan.appendChild(cardTextPText);
    cardButtonA.appendChild(cardButtonAText);
    cardBodyDiv.appendChild(cardFooterDiv);
    cardFooterDiv.appendChild(cardFooterDivText);

    colDiv.classList = "col-md-4 col-xs-12 order-block";                       
    cardDiv.classList = "card text-center";
    cardHeaderDiv.classList = "card-header card-header";
    cardBodyDiv.classList = "card-body";
    cardTitleH5.classList = "card-title";
    cardTextP.classList = "card-text";
    cardOderStatusSpan.classList = "badge rounded-pill text-bg-success oder-status";
    cardButtonA.classList = "btn btn-danger cancel-btn";
    cardFooterDiv.classList = "card-footer text-muted oder-status";

    cardOderStatusSpan.id = orderIdInput;

    cardButtonA.addEventListener('click', () => {
        // parentDiv.removeChild(colDiv);
        colDiv.style.display="none";
    })
}
