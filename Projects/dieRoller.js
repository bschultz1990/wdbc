// https://rollem.rocks/
let input
let roll
function rollDie() {
	let numDice = parseInt(roll.slice(0,roll.indexOf("d")));
	const rollArray = []

	for (let i = 1; i <=numDice; i++) {
		let dieKey = roll.indexOf("d") + 1;
		let max = parseInt(roll.slice(dieKey));
		let result = (Math.floor(Math.random()*max)+1);
		rollArray.push(result);
	}
	let rollTotal = 0;
	for (rolls in rollArray) {
		rollTotal += rollArray[rolls];
	}
	console.log(`${rollTotal} [${rollArray}] ${roll}`);
}

while (input !== "quit") {
	input = prompt("roll = Roll die\nclear = Clear console\nquit = Quit app");
	if (input == "roll") {
		roll = prompt("Enter die roll. (2d6, 3d4, etc...):");
		rollDie();
	} else if (input == "clear"){
		console.clear();
	}
}
console.log(`quit`)

Strip spaces in a string.
Look for a ; separating die rolls.
Add each item between ; to an array.