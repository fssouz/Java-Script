//seleção
const todoForm=document.querySelector("#todo-form")
const todoInput=document.querySelector("#todo-input")
const todoList=document.querySelector("#todo-list")
const editForm=document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue
//funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

const doneBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
todo.appendChild(doneBtn)

const editBtn = document.createElement("button")
editBtn.classList.add("edit-todo")
editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
todo.appendChild(editBtn)

const removeBtn = document.createElement("button")
removeBtn.classList.add("remove-todo")
removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
todo.appendChild(removeBtn)

todoList.appendChild(todo)

todoInput.value = ""
todoInput.focus()
}

//eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()


    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})
const toggleForms = () =>{
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}


document.addEventListener("click", (e) => {
    const targetE1 = e.target
    const parentE1 = targetE1.closest("div");
    let todoTitle 

    if (parentE1 && parentE1.querySelector("h3")){
        todoTitle = parentE1.querySelector("h3").innerText || ""

    }

    if(targetE1.classList.contains("finish-todo")){
        parentE1.classList.toggle("done")
    }

    if(targetE1.classList.contains("remove-todo")){
        parentE1.remove()
    }

    if(targetE1.classList.contains("edit-todo")){
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
        console.log(todoTitle)
    }

})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const editInputValue = editInput.value 

    if(editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})