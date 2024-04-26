let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // Creating New Elements
  let todo = document.createElement("div");
  let textElement = document.createElement("span");

  // Setting values & Styles
  textElement.innerHTML = value;
  // Appending Our Element To The DOM
  todo.appendChild(textElement);

  let closeElement = document.createElement("span");
  closeElement.innerHTML = "&times;";
  closeElement.classList.add("delete");

  // Attaching Events
  closeElement.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });

  todo.appendChild(closeElement);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  // preventing the default behavior
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
