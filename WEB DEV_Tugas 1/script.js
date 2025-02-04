function addTask() {
    const inputField = document.getElementById("tf-input");
    const input = inputField.value.trim();
  
    if (!input) {
      inputField.placeholder = "Please enter a valid task.";
      return;
    }
  
    const taskId =
      new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
  
    const task = document.createElement("li");
    task.id = taskId;
    task.classList.add("list-item");
  
    task.textContent = input;
  
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => editTask(taskId));
    task.appendChild(editButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => deleteTask(taskId));
    task.appendChild(deleteButton);
  
    document.getElementById("task-container").appendChild(task);
  
    inputField.value = "";
    inputField.placeholder = "Enter a task";
  }
  
function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}
  
function editTask(id) {
  const taskElement = document.getElementById(id);
  const currentText = taskElement.firstChild.textContent.trim(); 

  const inputField = document.getElementById("tf-input");

  inputField.value = currentText;
  inputField.placeholder = "Editing task...";

  const addButton = document.querySelector(".button");
  addButton.textContent = "Save Task";

  addButton.onclick = () => saveEditedTask(id);
  
}

function saveEditedTask(id) {
  const taskElement = document.getElementById(id);
  const inputField = document.getElementById("tf-input");
  const newText = inputField.value.trim();

  if (!newText) {
      inputField.placeholder = "Please enter a valid task.";
      return;
  }

  taskElement.firstChild.textContent = newText;

  inputField.value = ""; 
  inputField.placeholder = "New Edited task";

  const addButton = document.querySelector(".button");
  addButton.textContent = "Add Task";
  addButton.onclick = addTask;
}

  