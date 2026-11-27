
document.getElementById("date").innerText =
    new Date().toDateString();

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task == "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let text = document.createElement("span");
    text.innerText = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    checkbox.onclick = function() {
        text.classList.toggle("completed-task");
        updateData();
    };

    deleteBtn.onclick = function() {
        li.remove();
        updateData();
    };

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateData();
}

function updateData() {

    let tasks = document.querySelectorAll("#taskList li");

    let done = document.querySelectorAll(
        "#taskList input:checked"
    );

    let total = tasks.length;
    let completed = done.length;
    let pending = total - completed;

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round((completed / total) * 100);
    }

    document.getElementById("total").innerText = total;
    document.getElementById("completed").innerText = completed;
    document.getElementById("pending").innerText = pending;

    document.getElementById("percent").innerText =
        percentage + "%";

    document.getElementById("progress").style.width =
        percentage + "%";

    if (total == 0) {
        document.getElementById("message").innerText =
            "No tasks added yet!";
    } else {
        document.getElementById("message").innerText = "";
    }
}
