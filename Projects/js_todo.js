// "new" - Add a todo
// "list" - List all todos
// "delete" Remove specific todo
// "quit" - Quit app

let input
const list = []

function printlist() {
	console.log("**********")
	for (let index of list) {
		console.log(list.indexOf(index), index)
	}
	console.log("**********")
}

while (input !== "quit") {
	input = prompt("What would you like to do? \n add = add a todo \n quit = quit the app \n list = view list \n delete = remove specific todo");

	if (input === "add") {
		console.clear();
		const todo = prompt("Add a todo:");
		list.push(todo);
		console.log(`${todo} added`);

	} else if (input === "list") {
		console.clear();
		printlist();
		
	} else if (input === "delete") {
		console.clear()
		printlist()
		input = prompt("Enter index of todo:");
		console.clear()
		console.log(`${list[input]} removed`);
		list.splice(input,1);					// (start,deletecount,replacement)
		printlist();

	}

}
console.clear();
console.log(`quit`)