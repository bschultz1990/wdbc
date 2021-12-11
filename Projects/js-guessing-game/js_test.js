// Guessing game! Pick a number between 1 and...
let maxNum = prompt (`Welcome to the guessing game! Pick a number between one and your entry below:`);
let targetNum = Math.floor(Math.random()*maxNum+1);
let attempts = 1;
let guess = prompt (`Guess a number:`);
let gameRunning = true;

while(gameRunning === true) {
   if (guess == targetNum && attempts === 1) {
    console.log(`Congratulations! First try!!`);
    gameRunning = false;
} else if (guess == targetNum && attempts > 1) {
    console.log(`Congratulations! It took you ${attempts} tries.`);
    gameRunning = false;
} else if (guess.toLowerCase() === `q`) {
    console.log(`Game is quit.`);
    gameRunning = false;
} else if (guess > targetNum){
    guess = prompt (`Too high! Guess again:`)
    ++ attempts;
} else if (guess < targetNum){
    guess = prompt (`Too low! Guess again:`)
    ++ attempts;
} else {
    guess = prompt (`I don't recognize that. Guess a number or press 'q' to quit:`);
    ++ attempts;
}
}

// while(guess !== targetNum) {
//     if (guess.toLowerCase() === `q`) {
//         console.log(`Game is quit`);
//         gameRunning = false;
//     }
//     ++ attempts;
//     else if (guess > targetNum){
//         guess = prompt (`Too high! Guess again:`)
//     } else if (guess < targetNum){
//         guess = prompt (`Too low! Guess again:`)
//     } else {
//         guess = prompt (`I don't recognize that. Guess a number or press 'q' to quit:`);
//     }
// }

// if (guess.toLowerCase === `q`) {
//     console.log(`Game is quit.`);
// }; else {
//     console.log(`You got it! It took you ${attempts} guesses.`);
// }
