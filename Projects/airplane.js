let input = prompt ("Welcome to Fox's low-res, no-budget flight simulator! Type 'airplane' to begin.");

if (input.toLowerCase() == "airplane") {
	const airplane = {
		1:  "                  101",
		2:  "                 10001",
		3:  "                1000001",
		4:  "                1001001",
		5:  "                1000001",
		6:  "                1001001",
		7:  "                1000001",
		8:  "          1111110000000111111",
		9:  " 11111111111100000000000000000111111111111",
		10: "1111111111111000000000000000001111111111111",
		11: " 11111111111100000000000000000111111111111",
		12: "                1001001",
		13: "                1000001",
		14: "                1001001",
		15: "                1000001",
		16: "                1001001",
		17: "                1000001",
		18: "                1001001",
		19: "                1000001",
		20: "          1111111001001111111",
		21: "          1111111000001111111",
		22: "          1111111001001111111",
	}

	for (let i in airplane) {
		console.log(airplane[i]);
	}
}