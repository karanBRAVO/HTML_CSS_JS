console.log("Short Todo's");

const todoInp = document.getElementById("todoInp");
const todoCont = document.getElementById("showTodos");

function addTodo(text) {
  let para = document.createElement("p");
  para.innerHTML = text;
  todoCont.append(para);
}

function showTodos() {
  let count = Number(localStorage.getItem("count"));
  if (count == null) {
    localStorage.setItem("count", 0);
    location.reload();
  } else {
    if (count == 0) {
      addTodo("Nothing to show | add your first todo");
    } else {
      todoCont.innerHTML = "";
      addTodo("Your TODO's");
      for (let i = 0; i < count; i++) {
        let myTodo = localStorage.getItem(`todo_${i + 1}`);
        if (myTodo != null) {
          addTodo(`(id:${i + 1}) ${myTodo}`);
        }
      }
    }
  }
}

showTodos();

todoInp.addEventListener("keydown", (e) => {
  let keyName = e.key;
  if (keyName == "Enter") {
    let myTodo = String(todoInp.value);
    todoInp.value = "";
    if (myTodo.length > 0) {
      let count = Number(localStorage.getItem("count"));
      localStorage.setItem("count", count + 1);
      localStorage.setItem(`todo_${count + 1}`, myTodo);
      showTodos();
    } else {
      alert("Type some todo");
    }
  }
});

document.addEventListener("keydown", (e) => {
  let keyName = e.key;
  if (keyName == "Delete") {
    let id = prompt("Enter id:");
    if (id != null && id.length > 0 && Number(id) != NaN) {
      localStorage.removeItem(`todo_${id}`);
      location.reload();
    }
  }

  let ctrl_key_status = e.ctrlKey;
  if (ctrl_key_status) {
    if (keyName == "c") {
      localStorage.clear();
      location.reload();
    }
  }
});
