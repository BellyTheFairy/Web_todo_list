let addButton = document.querySelector("#button")
let input = document.querySelector("#input1")
let tasks = document.getElementById("tasks")
let compTasks = document.getElementById("complited-task")
let uncompTasks = document.getElementById("unconcompliter-task")
let counter_complited = 0;
let counter_uncomplited = 0;
let counter = 0;

function showText(){
    let task = document.createElement(('div'))
    tasks.append(task)

    let checkMark = document.createElement('input')
    checkMark.type = 'checkbox'
    task.append(checkMark)
    checkMark.addEventListener('click', function(){
        taskText.classList.toggle('checked')
        if (counter === 0){
            compTasks.innerText = ++counter_complited
            uncompTasks.innerText = --counter_uncomplited
        }
        else{
            compTasks.innerText = --counter_complited
            uncompTasks.innerText = ++counter_uncomplited
        }
    })

    let taskText = document.createElement('p')
    taskText.innerText = input.value
    task.append(taskText)
    ++counter_complited

    let delButton = document.createElement('button')
    delButton.innerText = 'Delete'
    task.append(delButton)
    delButton.addEventListener('click', function(){
        task.style.display = 'None';
        if(taskText.classList.contains("checked")){
            complited_tasks.innerText = --counter_complited
        }
        else{
            uncomplited_tasks.innerText =--counter_uncomplited
        }
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

    addButton.addEventListener('keydown', funclion(event){   //проверить на ноуте 
        if(event.key === 'Enter'){

        }
    })

    input.value = ''  //очищает input после нажатия на кнопку 
}
//слушатель событий
addButton.addEventListener("click", showText) //скобки - мгновенный запуск функции

