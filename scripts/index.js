let list= JSON.parse(localStorage.getItem('result'))||[];
todoList();

function todoButton() {
  let todoElement = document.querySelector("#todo-input");
  let tododte = document.querySelector("#dte");
  let todotme = document.querySelector("#tme");
  let task = todoElement.value;
  let date = tododte.value;
  let time = todotme.value;

  if (!task || !date || !time) {
    alert("Please fill in all three fields before adding a task.");
    return;
  }

  list.push({ item: task, dueDate: date, dueTime: time });
  todoElement.value = "";
  tododte.value = "";
  todotme.value = "";
  todoList();
}

function todoList() {
  
  let taskElement = document.querySelector(".added-list");
  let newHtml = "";
  for (let i = 0; i < list.length; i++) {
    let {item, dueDate,dueTime}= list[i];
    newHtml += `
    
    <span class='task-style'>${item}</span>
    <span class='task-style'>${dueDate}</span>
    <span class='task-style'>${dueTime}</span>
    <button class='btn-delete' onclick="list.splice(${i},1); todoList();" >
    <i class="fa-solid fa-xmark"></i>
    </button>
    `;
  }
  taskElement.innerHTML = newHtml;
  localStorage.setItem("result" , JSON.stringify(list));
}
