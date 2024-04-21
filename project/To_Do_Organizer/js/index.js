
const createToDo = () => {

    const toDoInput = document.getElementById("todo-input").value;

    if (toDoInput.length != 0) {
        const toDoPriorityInput = document.getElementById("todo-priority-input").value;

        const dateAndTime = new Date(document.getElementById("todo-deadline").value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            // hour: "numeric",
            // minute: "numeric",
            // second: "numeric"
        });

        createToDiv(toDoInput, toDoPriorityInput, dateAndTime);
    } else {
        document.getElementById("invalid-todo-input").style.display = "block";
    }

}


/*
    Draggable Elements-
    [draggable = "true"];

    1. ondragstart
    2. ondrag

    Parent elements (Where you have to drop the draggable element)
    1. ondragover
    2. ondrop
*/


// const toDoDragStart = (event) => {
//     let toDoCardBeingDragged = event.target.id;
//     event.dataTransfer.setData("ToDoCard", toDoCardBeingDragged);
// }


// // const toDoDrag = (event) => {
// //     // console.log()
// //     console.log(event.dataTransfer.getData("ToDoCard"));
// // }

// const allowDrop = (event) => {
//     event.preventDefault();
// }

// const toDoDrop = (event) => {
//     let toDoCardBeingDragged = event.dataTransfer.getData("ToDoCard");
//     // console.log(toDoCardBeingDragged);

//     let toDoCardBeingDroped = document.getElementById(toDoCardBeingDragged);
//     // console.log(toDoCardBeingDroped);
//     let parentElement = event.target;
//     parentElement.appendChild(toDoCardBeingDroped);
// }