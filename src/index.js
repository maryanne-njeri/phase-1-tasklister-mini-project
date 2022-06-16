document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const myForm = document.querySelector("form");
	myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const formInput = myForm.querySelector("#new-task-description").value;
	submitTodo(formInput)
	myForm.reset()
	})
});

const submitTodo = (task) => {
	const ul = document.querySelector("#tasks")
	const li = document.createElement("li");
	const btn = document.createElement("button");
	btn.addEventListener("click", deleteList)
	btn.innerHTML = "<strong>DELETE</strong>";
	li.textContent =`${task} `;
	li.appendChild(btn)
	ul.appendChild(li);
	
  }
  
  const deleteList = (event) => {
	event.target.parentNode.parentNode.remove();
  }