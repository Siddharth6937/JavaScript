const toDoBlock = document.getElementById("to-do-block");

const createToDiv = (toDoInput, toDoPriorityInput, dateAndTime) => {
    console.log("Create TO Div");
    const toDoCardDiv = document.createElement("div");
    const cardHeaderDiv = document.createElement("div");
    const priorityDisplaySpan = document.createElement("span");
    const deadlineDisplaySpan = document.createElement("span");
    const cardBodyDiv = document.createElement("div");
    const cardTitleH5 = document.createElement("H5");
    const deleteButton = document.createElement("a");

    toDoCardDiv.classList = " card to-do-card";
    cardHeaderDiv.classList = "card-header";
    priorityDisplaySpan.classList = "badge rounded-pill bg-warning text-dark";
    cardBodyDiv.classList = "card-body";
    cardTitleH5.classList = "card-title";
    deleteButton.classList = "btn btn-sm btn-danger";

    priorityDisplaySpan.innerText = `${toDoPriorityInput} Priority`;
    deadlineDisplaySpan.innerText = dateAndTime;
    cardTitleH5.innerText = toDoInput;
    deleteButton.innerText = "Delete";

    switch (toDoPriorityInput) {
        case "High":
            priorityDisplaySpan.classList = "badge rounded-pill bg-danger text-dark";
            break;

        case "Medium":
            priorityDisplaySpan.classList = "badge rounded-pill bg-warning text-dark";
            break;

        case "Low":
            priorityDisplaySpan.classList = "badge rounded-pill bg-success text-dark";
            break;

    }

    toDoCardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(priorityDisplaySpan);
    cardHeaderDiv.appendChild(deadlineDisplaySpan);
    toDoCardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(deleteButton);

    toDoBlock.appendChild(toDoCardDiv);
}
