window.addEventListener("DOMContentLoaded", function () {
    let newTask = document.querySelector('#newTask')
    let addBtn = document.querySelector("#addBtn")
    let taskList = document.querySelector('#taskList')

    addBtn.addEventListener('click', function () {
        if (newTask.value == "") {
            alert("Malumot kiriting")
        } else {
            let newTaskItem = document.createElement("div")
            newTaskItem.setAttribute("id", "taskItem")
            newTaskItem.innerHTML = ` 
                <p>${newTask.value}</p>
                <button id="taskItemDelete">
                    <i class="fa-solid fa-trash fa-xl"></i>
                </button>
                 `
            taskList.insertBefore(newTaskItem , taskList.firstChild)

            newTask.value = ''

            let taskItemDelete = newTaskItem.querySelector("#taskItemDelete")
            taskItemDelete.addEventListener('click' , function(){
                newTaskItem.remove()
            })
        }
    })
})