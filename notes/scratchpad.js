// LINKS:
// JS MODULES:
// https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/


// MATH OPERATORS
% // Modulo. Returns the remainder of a division problem.

// STRING METHODS
"string".slice(start,end); // Extracts a section of a string and returns a new string.
"string".replace("searchTerm", "Replace with"); //  returns a new string with some or all matches of a pattern replaced by a replacement
"string".repeat() // constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
"string".touppercase() // CAPITALIZE STRING
"string".tolowercase() // uncapitalize string
"string".indexof("character here") // Returns the index of your string number. Returns -1 if the thing isn't found.


// STRING TEMPLATE LITERALS
`I counted ${3+4} sheep`; // I counted 7 sheep. Use back tick. Only use inside of strings.


// MATH OBJECT
Math.PI // 3.1415926535
Math.round(4.9) // 5
Math.abs(-456) // 456
Math.pow(2,5) // 32
Math.floor(3.9999) // 3. Removes decimal.
Math.random(); // Returns a random decimal number between 0 and 1.
Math.floor(Math.random()*3+20) // Random whole number between 20 and 23.

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}`


// COMPARISON OPERATORS
> // Greater Than
< // Less Than
>= // Greater than or equal to
<= // Less than or equal to
== // Equal to
!= // Not equal
=== // Strict equality. (Changes things to the same type, then compares them.)
!== // Strict non-equality. (Checks for equality of value and type.)

// These will return true or false.


console.log(`text`) // Logs stuff to the console. Need this to work with files.
console.warn(`text`) // !
console.error(`text`) // Uh-oh... (x)
return // Returns a result of a function.

alert("Hi! I'm an alert!") // Pop-up window.
let thing1 = prompt("Enter input here.") // Pop-up window with user input field.
parseInt("input here") // Transforms input to a number.


// STRING METHODS
.charAt(0) // Focuses on an individual character. Delete, arrange, capitalize, etc...
.slice() // Extracts a section of a string and returns it as a new string, without modifying the original string. 

// CONDITIONALS. IF STATEMENT.
if (true) {
	// Do something here.
}

if (true) {
	// Do something here.
} else if (true) {
	// Do something else here.
}


// ELSE STATEMENT.
if (true) {
	// Do something
} else {
	// Do something else if NONE of the above IFs are true. Catch-all.
}

// LOGICAL OPERATORS
&& // AND
|| // OR
!  // NOT

// SWITCH STATEMENT

const day = 2;
switch(day){
	case 1:
	console.log(`Hello!`)
	break;
	case 2:
	console.log(`Case 2!`)
	break;
}


// ARRAYS
let stuff = [true,68,"cat",NaN]

stuff.length 			// 4. Each thing is indexed, just like a string.
stuff[2] 				// 'cat'
stuff[2] = 'dog' 		// We CAN reassign values of arrays.
stuff 					// [true, 68, 'dog', NaN]
stuff[5] = "Blursday"	// [true, 68, 'dog', NaN, empty, 'Blursday']. Can skip slots when adding elements.


// PUSH, POP, SHIFT, AND UNSHIFT
let colors = ['red', 'orange', 'yellow'];
colors.push('green', 'blue');					// ADD TO END		 ['red', 'orange', 'yellow', 'green', 'blue']
colors.pop()									// REMOVE FROM END	 ['red', 'orange', 'yellow', 'green']
colors.shift()									// REMOVE FROM START ['orange', 'yellow', 'green']
colors.unshift('red')							// ADD TO START		 ['red', 'orange', 'yellow', 'green']


// ARRAY METHODS - CONCAT
let colors = ['red', 'orange', 'yellow'];
let shapes = ['triangle,', 'rhombus', 'circle']

colors.concat(shapes)							// CONCAT ['red', 'orange', 'yellow', 'triangle,', 'rhombus', 'circle']

// INCLUDES
colors.includes("circle")						// true
colors.includes("rhombus")						// false

// INDEXOF - Works on strings and arrays!
"blue".indexof('b')								// 0
shapes.indexof('rhombus')						// 1
shapes.indexof('bonkazoid')						// -1

// REVERSE - DESTRUCTIVE METHOD!!
shapes.reverse()								// ['circle', 'rhombus', 'triangle,']

// SLICE - Gets a slice of an array.
// Works on strings too!
"UnderDog".slice(5,7)							// 'Dog'
"UnderDog".slice(5,6)							// 'Do'

// SPLICE - DESTRUCTIVE. Removes or replaces elements in an array.
// DOES NOT WORK ON STRINGS.
let shapes = ['triangle,', 'rhombus', 'circle']
shapes.splice(0,1,"square");					// (start,deletecount,replacement)
												// ['square', 'rhombus', 'circle']

// SORT - Kind of useless for now?
// Converts everything to a string, then sorts.
let scores = [42,54,64,74,100,99];
scores.sort();									// Uhhh... [100, 42, 54, 64, 74, 99]


// ARRAYS AND CONST
// Const with arrays cares about the memory rerence, not the array contents.
// How to access things in arrays in other arrays.
const ticTacToe = [
['X','X','X'],
['O',null,'O'],
['X','X','X']];


ticTacToe[1][1]					// null.
ticTacToe[1][1]	= "x"			// x

const ticTacToe = [
['X','X','X'],
['O',"x",'O'],
['X','X','X']];


// OBJECTS
const names = {user1: "Perefoxigrine", user2: "J.A.M"}
names.user1
'Perefoxigrine'
names.user2
'J.A.M'

// ADDING STUFF TO AN OBJECT
discordRanks["rank2"] = "Anything Else"


// FOR LOOPS
for (
	[initial expression];
	[condition];
	[increment expression]
)

for (let i = 0; i <=10; i++) {
	console.log(`${i}`)
}

// FOR
for (let i = 0; i <=10; i++) {
	console.log(i)
}

// WHILE LOOPS
let i = 0;
while (i<=10) {
	i+=1
	console.log(i)
}


// LOOPING OVER ARRAYS
const robots = [`Jeffrey`, `Billy`, `Samwise`, `Marshall`]
for (let num of robots) {
	console.log(num.toUpperCase())
}
// JEFFREY, BILLY, SAMWISE, MARSHALL


const numbers = [1,2,3,4,5,6,7,8,9];
for (let square of numbers) {
	console.log(square)
}

// ITERATING OVER OBJECTS
const robots = {bot1: "Jeffrey", bot2: "Billy", bot3: "Samwise", bot4: "Marshall"}

for (let name in robots) {
	console.log(robots[name])
}
