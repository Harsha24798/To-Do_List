document.getElementById("btnAddTask").addEventListener("click", addTask);


let task = 1;
function addTask() {
    let userInput = document.getElementById("txtUserInput").value;

    document.getElementById("toDoList").innerHTML += `
        <div class="card mb-3">
            <div class="card-header">
                Task : ${task++}
                <button class=""><img class="okImage" src="./img/icons8_ok_480px.png" alt=""></button>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>${userInput}</p>
                </blockquote>
                <hr>
                <input class="form-check-input" type="checkbox" value="" id="chechkBox">
            </div>
            </div>
        </div>
    `;

    document.getElementById("chechkBox").addEventListener("change", function () {
        alert("Checked");
    });
}


