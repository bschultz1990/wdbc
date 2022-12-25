window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("Please enter a task.")
			return;
		}
		const task_el = document.createElement("div");
		task_el.classList.add("task");

		const task_conetnt_el = document.createElement("div")
		task_conetnt_el.classList.add("content");
		task_conetnt_el.innerText = task;

		task_el.appendChild(task_conetnt_el);
		list_el.appendChild(task_el)
	})
})
