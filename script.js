let addButton = document.querySelector("#button")
let input = document.querySelector("#input1")
let tasks = document.getElementById("tasks")
let counter = 0
let compTasks = document.getElementById("complited-task")
let uncomptTsks = document.getElementById("unconted_")

function showText(){
    let task = document.createElement(('div'))
    tasks.append(task)
    let checkMark = document.createElement('input')
    checkMark.type = 'checkbox'
    task.append(checkMark)
    checkMark.addEventListener('click', function(){
        taskText.classList.toggle('checked')
        if (tastText){
            compTasks.innerText = 
            uncompTask.innerText = 
        }
    })

    let taskText = document.createElement('p')
    taskText.innerText = input.value
    task.append(taskText)


    let delButton = document.createElement('button')
    delButton.innerText = 'Delete'
    task.append(delButton)
    delButton.addEventListener('click', function(){
        task.style.display = 'None';
        if()
    })

    let editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    task.append(editButton)

    editButton.addEventListener('click', function(){
        checkMark.style.display = 'None';
        editButton.style.display = 'None';
        delButton.style.display = 'None';

        let inputEdit = document.createElement('input')
        inputEdit.value = taskText.innerText;
        task.append(inputEdit)

        let buttonSave = document.createElement('button')
        buttonSave.innerText = "Save"
        task.append(buttonSave)

        buttonSave.addEventListener('click', function(){
            taskText.innerText = inputEdit.value
            checkMark.style.display = 'inline';
            editButton.style.display = 'inline';
            delButton.style.display = 'inline';
            buttonSave.style.display = 'None';
            inputEdit.style.display = 'None'
        })

    })

    input.value = ''  //очищает input после нажатия на кнопку 
}
//слушатель событий
addButton.addEventListener("click", showText) //скобки - мгновенный запуск функции
