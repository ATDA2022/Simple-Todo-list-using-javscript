var form = document.querySelector('#todo-form');
var inputTodo = document.querySelector('.inp-todo');
var addBtn = document.querySelector('.add-todo');
var todoCon = document.querySelector('.todo-list');

var allTodos;

window.onload = ()=>{
    showTodoCount();
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
})
addBtn.addEventListener('click',addTodo);

function addTodo(){
    if(inputTodo.value == ''){
        alert("Please fill all the fields...");
    }
    else{
        var itemCon = document.createElement('div');
        itemCon.className = 'todo';
        var todoTitle = document.createElement('span');
        todoTitle.textContent = inputTodo.value;
        var editBtn = document.createElement('button');
        editBtn.className = 'edit-todo';
        var editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen';
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-todo';
        var deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';

        editBtn.appendChild(editIcon);
        deleteBtn.appendChild(deleteIcon);

        itemCon.appendChild(todoTitle);
        itemCon.appendChild(editBtn);
        itemCon.appendChild(deleteBtn);

        todoCon.appendChild(itemCon);

        inputTodo.value = '';
    }
}
function showTodoCount(){
    allTodos = document.querySelectorAll(".todo-list .todo");

    console.log(allTodos.length);
    if(allTodos.length <= 0){
        
    }
    else{
        
    }
}