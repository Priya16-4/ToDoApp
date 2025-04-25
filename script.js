// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Add "Mark as Done" functionality
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // Add "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
});