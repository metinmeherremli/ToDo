const input = document.getElementById("taskadder")
const btn = document.getElementById("btn")
const tasklist = document.querySelector(".tasklist")
const ul = document.querySelector(".tasklist , ul")

let todos = []

btn.addEventListener("click", function (e) {
    e.preventDefault()

    const tasktext = input.value.trim()

    if (!tasktext) return

    todos.push(tasktext);
    input.value = ""
    sessionStorage.setItem("todos", JSON.stringify(todos));
    updateTaskList()
})

function updateTaskList() {

    ul.innerHTML = "";

    tasklist.style.display = todos.leght ? "block" : "none";

    todos.forEach(function (element, index) {

        const liEl = document.createElement("li")

        const spanEl = document.createElement("span")

        const btnEl = document.createElement("Button")

        spanEl.textContent = element
        btnEl.textContent = "Delete Task" 
        btnEl.className = "btn"
        btnEl.addEventListener("click",function(){
            removeTodo(index)
            console.log(todos);
             
        })
        liEl.insertAdjacentElement("afterbegin" ,spanEl)
        liEl.insertAdjacentElement("beforeend", btnEl)
        ul.insertAdjacentElement("afterbegin" , liEl)
    })

}

function removeTodo(index){
    todos.splice(index,1)
    sessionStorage.setItem("todos", JSON.stringify(todos))
    updateTaskList()
}