// https://rollem.rocks/
// .replace()
// .split()

let input

while (input !== "quit") {
	input = prompt("roll = Roll die\nclear = Clear console\nquit = Quit app");

	if (input == "roll") {
		let dieRolls = prompt(`Enter die rolls, separated by a semicolon ;\n(10d6; 1d20 etc...)`)
		let strippedArray = dieRolls.replace(/\s+/g, ``).split(`;`); // Replace any space with an empty string and split the dieRolls into an array.
		console.log(strippedArray);
		// [1d20, 2d4]
		for (let rolls of strippedArray) {
		let result = rolls.match(/(\d+)d(\d+)/); // For each item in the array, search for any number of digits, capture it, followed by a d, followed by any number of digits, and capture it.
		// [1d20, 1, 20]
		let numDice = parseInt(result[1]);
		let dieSides = parseInt(result[2]);

		const rollArray = []
		for (let i = 1; i <=numDice; i++) {
			let roll = (Math.floor(Math.random()*dieSides)+1);
			rollArray.push(roll);
		}

		let sumtotal = rollArray.reduce((total,i) => total+i);

		console.log(`${sumtotal} [${rollArray}] ${result[0]}`);
	}

} else if (input == "clear"){
	console.clear();
}
}
console.log(`quit`);


// rollArray.reduce((total,i) => total+i)
// console.log(`${total} [${rollArray}] ${result[0]}`);
