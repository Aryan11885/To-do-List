function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    let li = document.createElement("li");

    if(taskText === "") return;

    li.innerHTML = `${taskText} <button onclick="removeTask(this)">\u{1F5D1}</button>`;
    taskList.appendChild(li);
    taskInput.value = "";

}
function removeTask(button) {
    button.parentElement.remove();
}