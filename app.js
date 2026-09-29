function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Escribe una tarea.");
        return;
    }

    const list = document.getElementById("taskList");

    const item = document.createElement("li");

    item.textContent = taskText;

    list.appendChild(item);

    input.value = "";
}