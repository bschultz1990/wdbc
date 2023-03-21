# Javascript Notes

[JS Modules - A Beginner's Guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/)

[More JS Modules](https://www.c0d3.com/)

[Pramp - Mock Interviews](https://www.pramp.com/#/)

## Operators

`2 % 3 // Modulo. Returns the remainder of a division problem.`

## String Methods

### **Slice**

Extracts a section of a string and returns a new string.

```js
"string".slice(start, end);
```

### **Repeat**

Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```js
"string".repeat();
```

### **toUpperCase**

CAPITALIZE STRING

```JS
"string".toUpperCase()
```

### **toLowerCase**

Uncapitalize string

```js
"string".toLowerCase();
```

### **indexOf**

Returns the index of your string number. Returns -1 if the thing isn't found.

```js
"string".indexOf("character here");
```

### **Split**

Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

```js
"stringstuff-otherstuff".split(separator, limit);
```

### **Replace**

Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

```js
// "string";
string.replace();
string.replace(regexp, newSubstr);
string.replace(regexp, replacerFunction);
string.replace(substr, newSubstr);
string.replace(substr, replacerFunction);
```

Example: remove all spaces in a string:

```js
let word = "I am a string.";
let newword = word.replace(/\s+/g, ``);
console.log(newword); // Iamastring
```

### **String Template Literals**

```js
I counted ${3 + 4} sheep; // I counted 7 sheep.
//Use back tick. Only use inside of strings.
```

### TypeOf()

Returns a string indicating the type of the unevaluated operand.

```js
typeof operand;
typeof 42; // "number"
```

### Math Object

```js
Math.PI; // 3.1415926535
Math.round(4.9); // 5
Math.abs(-456); // 456
Math.pow(2, 5); // 32
Math.floor(3.9999); // 3. Removes decimal.
Math.random(); // Returns a random decimal number between 0 and 1.
Math.floor(Math.random() * 20) + 1; // Random whole number from 1 to 20.

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
```

## Comparison Operators

These will return True or False.

> Greater Than
> < Less Than
> = Greater than or equal to
> <= Less than or equal to
> == Equal to
> != Not equal
> === Strict equality. (Changes things to the same type, then compares them.)
> !== Strict non-equality. (Checks for equality of value and type.)

## Console Logging Methods

```js
console.log(`text`); // Logs stuff to the console. Need this to work with files.
console.warn(`text`); // !
console.error(`text`); // Uh-oh... (x)
console.clear(); // Clears the console.
return; // Returns a result of a function.

alert("Hi! I'm an alert!"); // Pop-up window.
let thing1 = prompt("Enter input here."); // Pop-up window with user input field.
parseInt("input here"); // Transforms input to a number.
```

## String Methods

A live test of typing!

```js
.charAt(0) // Focuses on an individual character.
.slice(beginIndex, endIndex)
// Extracts a section of a string and returns it as a new string,
// without modifying the original string.
```

## Conditionals - IF, ELSE IF, and ELSE

```js
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
```

## Logical Operators: AND, OR, and NOT

```js
this && that // AND
this || other_thing // OR
this ! other_thing  // NOT
```

## Switch Statement

```js
const day = 2;
switch (day) {
case 1:
console.log(`Hello!`);
break;
case 2:
console.log(`Case 2!`);
break;
}
```

## Arrays and Array Methods

```js
let stuff = [true, 68, "cat", NaN];

stuff.length; // 4. Each thing is indexed, just like a string.
stuff[2]; // 'cat'
stuff[2] = "dog"; // We CAN reassign values of arrays.
stuff; // [true, 68, 'dog', NaN]
stuff[5] = "Blursday"; // [true, 68, 'dog', NaN, empty, 'Blursday']. Can skip slots when adding elements.
```

### Push, Pop, Shift, and Unshift

```js
let colors = ["red", "orange", "yellow"];
colors.push("green", "blue"); // ADD TO END		 ['red', 'orange', 'yellow', 'green', 'blue']
colors.pop(); // REMOVE FROM END	 ['red', 'orange', 'yellow', 'green']
colors.shift(); // REMOVE FROM START ['orange', 'yellow', 'green']
colors.unshift("red"); // ADD TO START		 ['red', 'orange', 'yellow', 'green']
```

### Concat

```js
let colors = ["red", "orange", "yellow"];
colors.push("green", "blue"); // ADD TO END		 ['red', 'orange', 'yellow', 'green', 'blue']
colors.pop(); // REMOVE FROM END	 ['red', 'orange', 'yellow', 'green']
colors.shift(); // REMOVE FROM START ['orange', 'yellow', 'green']
colors.unshift("red"); // ADD TO START		 ['red', 'orange', 'yellow', 'green']
```

### Includes

```js
colors.includes("circle"); // true
colors.includes("rhombus"); // false
```

### IndexOf

```js
"blue".indexOf("b"); // 0
shapes.indexOf("rhombus"); // 1
shapes.indexOf("bonkazoid"); // -1
```

### Reverse - DESTRUCTIVE

```js
shapes.reverse(); // ['circle', 'rhombus', 'triangle,']
```

### Splice - DESTRUCTIVE

Does not work on strings.

```js
let shapes = ["triangle,", "rhombus", "circle"];
shapes.splice(0, 1, "square"); // (start,deletecount,replacement)
// ['square', 'rhombus', 'circle']
```

### Sort

Converts everything to a strong, then sorts. Kind of useless now that we have .map, etc...

```js
let scores = [42, 54, 64, 74, 100, 99];
scores.sort(); // Uhhh... [100, 42, 54, 64, 74, 99]
```

## Filter Method

Creates a new array with all elements that pass the test implemented by the provided boolean function:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter((n) => n % 2 == 1); // Return all odd numbers.
numbers.filter((n) => n % 2 == 0); // Return all even numbers.

// Accepts an array of strings as an imput and returns an array of
// those strings that are less than 10 characters long.
function validUserNames(usernames) {
return usernames.filter((i) => i.length < 10);
}
```

## Arrays and Const

Const with arrays cares about the memory rerence, not the array contents. How to access things in arrays in other arrays.

```js
const ticTacToe = [
["X", "X", "X"],
["O", null, "O"],
["X", "X", "X"],
];

ticTacToe[1][1]; // null.
ticTacToe[1][1] = "x"; // x

const ticTacToe = [
["X", "X", "X"],
["O", "x", "O"],
["X", "X", "X"],
];
```

## Objects

```js
const names = { user1: "Perefoxigrine", user2: "J.A.M" };
names.user1;
("Perefoxigrine");
names.user2;
("J.A.M");

// ADDING STUFF TO AN OBJECT
discordRanks["rank2"] = "Anything Else";

// ITERATING OVER OBJECTS
const robots = {
bot1: "Jeffrey",
bot2: "Billy",
bot3: "Samwise",
bot4: "Marshall",
};

for (let name in robots) {
console.log(robots[name]);
}
```

### Nesting Stuff Inside Objects

```js
const spaceship = {
telescope: {
yearBuilt: 2018,
model: "91031-XLT",
focalLength: 2032,
},
crew: {
captain: {
name: "Sandra",
degree: "Computer Engineering",
encourageTeam() {
console.log("We got this!");
},
},
},
engine: {
model: "Nimbus2000",
},
nanoelectronics: {
computer: {
terabytes: 100,
monitors: "HD",
},
"back-up": {
battery: "Lithium",
terabytes: 50,
},
},
};
```

## Loops

### For Loops

```js
for ([initial expression], [condition], [increment expression])
for (let i = 0; i <=10; i++) {
console.log(`${i}`)
}
for (let i = 0; i <=10; i++) {
console.log(i)
}
```

### While Loops

```js
let i = 0;
while (i <= 10) {
i += 1;
console.log(i);
}
```

### Looping over Arrays

```js
const robots = [`Jeffrey`, `Billy`, `Samwise`, `Marshall`];
for (let num of robots) {
console.log(num.toUpperCase());
}
// JEFFREY, BILLY, SAMWISE, MARSHALL
```

Or...

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let square of numbers) {
console.log(square);
}
```

## Regular Expressions

Search using characters and meta characters!

-   `\d` = 0-9;
-   `\w` = A-Z, a-z, 0-9
-   `\s` = whitespace (space, tab,)
-   `\D` = NOT 0-9;
-   `\W` = NOT A-Z, a-z, 0-9
-   `\S` = NOT whitespace (space, tab,)
-   `.` = any character whatsoever
-   `*` = 0 or more. (wildcard);

## Functions

Functions can be called as the variables they're inside.

### Generating (or returning) Functions

```js
function makeBetweenFunc(min, max) {
return function (num) {
return num >= min && num <= max;
};
}
// Create functions based off the one above to tell if a number is between two numbers or not.
const isChild = makeBetweenFunc(0, 18); // isChild(2) returns TRUE
const isAdult = makeBetweenFunc(19, 64); // isAdult(18) returns FALSE
const isSenior = makeBetweenFunc(65, 120); // isSenior(100) returns TRUE
```

### Function Expressions

```js
// FUNCTION EXPRESSIONS
function robots(bot1, bot2, bot3, bot4) {
console.log(bot1, bot2, bot3, bot4);
}

// is EXACTLY THE SAME AS...
let robots = function (bot1, bot2, bot3, bot4) {
console.log(bot1, bot2, bot3, bot4);
};
```

### Arrow Functions

Another way to write in-line functions.

```js
// Traditional Anonymous Function:
function (a) {
return a + 100;
}

// Arrow Function Break Down:
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;


// This:
const sciNames = birds.map(function (b) {
return b.Sci;
});

// Can be written as:
const sciNames = birds.map((b) => { return b.Sci });

// Or as this, if you're returning ONE THING:
const sciNames = birds.map(b => b.Sci);


// setTimeout sets a timer which executes a function or specified piece of code once the timer expires.
let timeoutID = setTimeout(function (delay, arg1, arg2);

// setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
let intervalID = setInterval(func, [delay, arg1, arg2, ...]);

```

### Methods - Adding Functions as Properties in Objects

```js
const math = {
multiply: function (x, y) {
return x * y;
},
divide: function (x, y) {
return x / y;
},
square: function (x) {
return x ** 2;
},
};

// Or, try this shorthand method, haha:
const math = {
add(x, y) {
return x + y;
},
divide(x, y) {
return x / y;
},
square(x) {
return x ** 2;
},
};
```

### Functions and the Keyword, "this"

These two methods will return the same string:

```js
// METHOD 1:
const cat = {
name: "Pete",
color: "Blue",
instrument: "Electric Guitar",
hobby: "Skateboarding",
intro() {
console.log(`Hi! My name is ${this.name}! I am the color ${this.color}. I play the ${this.instrument} and my favorite hobby is ${cat.hobby}.`);
},
};
cat.intro(); // Hi! My name is Pete! I am the color Blue. I play the Electric Guitar and my favorite hobby is Skateboarding.

// METHOD 2:
const cat = {
name: "Pete",
color: "Blue",
instrument: "Electric Guitar",
hobby: "Skateboarding",
intro() {
console.log(`Hi! My name is ${cat.name}! I am the color ${cat.color}. I play the ${cat.instrument} and my favorite hobby is ${cat.hobby}.`);
},
};
cat.intro(); // Hi! My name is Pete! I am the color Blue. I play the Electric Guitar and my favorite hobby is Skateboarding.
```

THIS.eggCount++ updates the eggCount property, which is a level higher (outside) the function layAnEgg():

```js
const hen = {
name: `Helen`,
eggCount: 0,
layAnEgg() {
this.eggCount++;
return "EGG";
},
};
```

## Try and Catch

Tests errors and stops them before they spread.

```js
hello.toUpperCase(); // UNCAUGHT reference error!

// Same function, just wrapped in a try/catch sequence.
try {
hello.toUpperCase();
} catch {
console.log("Errrrror.");
}
```

## Array Callback Methods

Function required to be passed into them

```js
.forEach, .map, .filter, .find, .reduce, .some, .every
```

### .forEach

(Older version of FOR-OF loops.)

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (i)) {
if (i % 2) {
console.log(i) // print even numbers
}
}
```

### .map

Executes a function on each element of an array, returning an array of its own.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // double every number, using MAP
const doubles = numbers.map(function (num) {
return num * 2;
});

const fullNames = [
{ first: "Albus", last: "Dumbledore" },
{ first: "Harry", last: "Potter" },
{ first: "Hermione", last: "Granger" },
{ first: "Ron", last: "Weasley" },
{ first: "Rubeus", last: "Hagrid" },
{ first: "Minerva", last: "McGonagall" },
{ first: "Severus", last: "Snape" },
];
const firstNames = fullNames.map(function (i) {
return i.first;
});
// Array(7) [ "Albus", "Harry", "Hermione", "Ron", "Rubeus", "Minerva", "Severus" ]
```

This is an array of objects:

```js
const birds = [
{
Name: "Peregrine Falcon",
Sci: "Falco Peregrinus",
Status: "Least Concern",
},
{
Name: "Gyrfalcon",
Sci: "Falco Rusticolus",
Status: "Least Concern",
},
{
Name: "Chestnut-Collared Swift",
Sci: "Streptoprocne rutila",
Status: "Least Concern",
},
{
Name: "Burrowing Owl",
Sci: "Athene Cunicularia",
Status: "Least Concern",
},
];

function birdStats(birds) {
const sciNames = birds.map((b) => b.Sci);
console.log(sciNames);
}

birds.map(({ Name, Sci }) => {
return `Name: ${Name}. Scientific Name: ${Sci}.`;
});
// [ "Falco Peregrinus", "Falco Rusticolus", "Streptoprocne rutila", "Athene Cunicularia" ]
```

### Every

Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
const exams = [10, 70, 90, 96, 100];
exams.every((score) => score >= 75);
// True IF all scores are above 75
```

### Some

Tests whether any element in an array passes the test implemented by the provided function. It returns a Boolean value.

```js
// Returns true if one or more returns true.
const exams = [10, 70, 90, 96, 100];
exams.some((score) => score >= 75);

// This returns true if all numbers in the array numbers are even.
function allEvens(numbers) {
return numbers.every((i) => i % 2 == 0);
}
```

### Reduce

Executes a user-supplied "reducer" callback function on each element in an array, passing in the return value from the calculation on the preceding element.

```js
let sumtotal = rollArray.reduce((total, i) => total + i);
```

## Newer JavaScript Functions

### Default parameters.

```js
// Defaults to rolling 1d6 if you don't pass anything in.
function rollDie(numSides = 6) {
return Math.floor(Math.random() * numSides) + 1;
}
```

### Spread

Pass an array of values as arguments into a function.

```js
const nums = [1, 2, 3, 4, 5];
const moreNums = [6, 7, 8, 9, 10];
console.log(nums, moreNums); //
// [ 1, 2, 3, 4, 5 ]
// [ 6, 7, 8, 9, 10 ]

// WE CAN DO BETTER:
const allNums = [...nums, ...moreNums]
console.log(allNums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// Works for any iterable thing, like strings, arrays, or objects!
console.log(`Hello`) // "Hello"
console.log(...`Hello`) // "H e l l o"

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Nina', 'Pinta', 'Santa Maria']
const allpets = [...cats, ...dogs, "Speedy"] // [ "Blue", "Scout", "Rocket", "Nina", "Pinta", "Santa Maria", "Speedy"]
// YOU DON'T HAVE TO USE ARRAY.PUSH!! :)

const string = "Hello"
[...string] // [ "H", "e", "l", "l", "o" ]
```

Spread With Objects

```js
// You can spread properties from multiple objects into new objects!

const feline = { Legs: 4, Vice: "High", Fetch_Ability: 2 };
const canine = { Legs: 4, Vice: "Low", Fetch_Ability: 10 };

const catDog = { ...feline, ...canine };
// { Legs: 4, Vice: "Low", Fetch_Ability: 10 }
// This overwrites the key/value pairs with the newest ones when they're the same with each object.

const formData = {
email: "blueman@gmail.com",
username: "bschultz1990",
password: "ASDFasdf3456",
};

const newUser = {
...formData,
id: 2345,
isAdmin: false,
};

console.log(newUser);
// { email: "blueman@gmail.com", username: "bschultz1990", password: "ASDFasdf3456", id: 2345, isAdmin: false }
```

### Rest

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

If `...` is used as an ARGUMENT in a FUNCTION, it's a REST parameter.

```js
function sum(...theArgs) {
return theArgs.reduce((previous, current) => {
return previous + current;
});
}
```

### Destructuring Arrays

A short, clean syntax to unpack values from arrays or properties from objects into distinct variables.

```js
// OLD WAY
const scores = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
const favColor = scores[0];
const secondFavColor = scores[1];

// THERE'S AN EASIER WAY:
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
const [favColor, secondFavColor, ...otherColors] = colors;
```

### Destructuring Objects

Order matters not. Judge me by my organization, do you?

```js
const boomingBlade = {
Title: "Booming Blade",
School: "Evocation",
Casting_Time: "1 action",
Range: "5 feet",
Components: "V,M",
Duration: "1 round",
Materials: "A weapon",
};
const { Casting_Time, Duration, Materials, Description } = boomingBlade;
// Casting_Time "1 Action"

// You can rename the variables you pull out, too!
const { Casting_Time: castingTime } = boomingBlade; // Casting_Time "1 Action"
```

### Destructuring Parameters

You can do this on the "way in" to a function.

```js
const birds = [
{
Name: "Peregrine Falcon",
Sci: "Falco Peregrinus",
Status: "Least Concern",
},
{
Name: "Gyrfalcon",
Sci: "Falco Rusticolus",
Status: "Least Concern",
},
{
Name: "Chestnut-Collared Swift",
Sci: "Streptoprocne rutila",
Status: "Least Concern",
},
{
Name: "Burrowing Owl",
Sci: "Athene Cunicularia",
Status: "Least Concern",
},
];

birds.map(({ Name, Sci }) => {
return `Name: ${Name}. Scientific Name: ${Sci}.`;
}); // "Name: Peregrine Falcon. Scientific Name: Falco Peregrinus", etc...
```

## The DOM (**D**ocument **O**bject **M**odel)

A JavaScript representation of a webpage. OR HTML and CSS go in, Javascript objects come out. YAAAY! FINALLY! :D

Go to any webpage. Open Chrome dev tools and type this in to get a preview:

```js
console.dir(document);
```

### Selecting Object Elements

```js
document.getElementById("id"); // Only works on elements that have an id in html.
document.getElementsByTagName("tagname"); // Returns an HTML collection (not an array) of elements by the tag name specified.
document.getElementsByClassName("classname"); // Returns an HTML collection (not an array) of elements by the class name specified.

// Query Selector! :) (Better than above.)
document.querySelector("#banner"); // Returns the first match of a class, id, or element.
document.querySelector('input[type = "checkbox"]'); // Returns the input type of checkbox.
document.querySelectorAll(".done"); // Returns ALLLLLL matches of the .done class.
```

Another example:

```js
// Replace every link text with "I AM A LINK."
const allLinks = document.querySelectorAll("a");
for (const link of allLinks) {
link.innerText = "I AM A LINK";
}
```

### Inner HTML

Adds actual HTML elements and a text to your markup.

```js
document.querySelector("a").innerHTML = "<i>I AM A LINK</i>";
document.querySelector("a").innerHTML += "<i>I AM A LINK</i>"; // Add, don't replace the text in an element.
```

Image Elements

```js
document.querySelector("img").src; // Source url
document.querySelector("img").alt; // Alternate text:
```

Get the computed style of stuff in the window object:

```js
window.getComputedStyle(h1).color; // Returns the color of your h1.
window.getComputedStyle(h1).marginLeft; // Returns the margin left of your h1.
```

## Changing Things Via JavaScript

### Class Lists

```js
// Makes inline html, which works, but it's not great.
const subheader = document.querySelector("#subheader");
// subheader.style.color = "blue"
subheader.style.color = "blue";

// BETTER!
// CLASS LISTS!!!
h1.classList.add("someClass"); // It's like pushing to an array.
element.classList.remove("someClass"); // Remove someClass.
element.classList.contains("someClass"); // Does the element contain someClass?
element.classList.toggle("someClass"); // Toggle between someClass and someOtherClass.
```

### Change/Remove IDs

```js
element.id = "someID";
element.id = "";
```

### Next or Previous Sibling

```js
.nextElementSibling
.previousElementSibling

document.queryselector
squareImage = document.querySelector('square')
squareImage.parentElement
```

### Creating New Elements

```js
document.createelement("div");
const newImg = document.createElement("img"); // Create image
newImg.src = "http://placehold.it/"; // Assign source

document.body.appendChild(newImg); // Append image as the LAST child of body.

newH3 = document.createElement("h3");
newH3.innertext = "NEW H3 HERE!!";
document.body.apendChild(newH3);

// APPENDING MULTIPLE THINGS AT A TIME.
document.querySelector("p").append("naked text here."); // Append text as last child of the first paragraph element.
document.querySelector("p").prepend("naked text here."); // Prepend text as first child of the first paragraph element.

element.insertAdjacentElement("position", element); // Insert after an element ends or before an element begins.
element.after(element); // Insert after an element.
element.before(element); // Insert before an element.
```

### Removing Elements

```js
element.remove(element); // Remove element.
```

## Events

Runs code when a user does something.

[MDN: .addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```js
const button = document.querySelector("#exampleElement");
button.addEventListener("click", function () {
alert("Clicked");
});

//OR
function clickMe() {
alert("Clicked");
}
button.addEventListener("click", clickMe);
```

### Events and the Keyword, "This"

When you have it inside a callback that is invoked inside a function, "This will refer to the last event that occurred (click, drag, button press, etc...).

```js
const keyInput = document.querySelector("input"); // refers to a generic input element from HTML.
input.addEventListener("keydown", function () {
console.log("KEY DOWN");
});

input.addEventListener("keydown", function (e) {
// references the Event object.
console.log(e);
});

e.key; // The end result. Output of this depends on the language the user is using.
e.code; // The physical location (index) of the key.

input.addEventListener("keyup", function () {
console.log("KEY UP");
});
```

### Form Events and "Prevent Default"

Whatever a form action attribute is set to, our entire browser window will go to whatever page the form was pointing to. (eg /formsubmit).

What if I want to stay on the page? Access the "event" variable and change the default behavior within your specific event.

```js
const form = document.querySelector("#yourForm");
const input = document.querySelector("#yourFormInput"); // Stuff you type.
const list = document.querySelector("#yourFormList");
form.addeventListener("submit", function (e) {
e.preventDefault(); // Don't change the page. Woo!
console.log("submitted");
console.log(input.value); // Log the stuff you type.
});
```

Focus elements like a text field, check box, etc...

```js
element.focus();
```

Input and Change Events:

```js
// INPUT AND CHANGE EVENTS
element.addEventListener("change"); // Fires ONCE when you blur (leave) an input.
element.addEventListener("input"); // Fires EVERY TIME you blur (leave) an input.

anyelement.addEventListener("input", function (e) {
h1.innerText = `Welcome, ${anyelement.value}`; // Update an h1 element as a live preview while you type.
});
```

#### **Event Bubbling**

What happens when you trigger events that are nested inside other events? All of them trigger in cascading succession.

```js
anyelement.addEventListener("input", function (e) {
e.stopPropagation(); // <-- Here's how to prevent that
});
```

#### **Event Delegation**

Adding an event listener to a parent object instead of the object itself. Handy when you're creating elements dynamically and want to interact with them.

```js
const list = document.querySelectorAll("ul" function (e){
e.target.remove(); // <-- Event listener target holds what you clicked on in the parent element.
})
```

# Async Javascript

Ways to hand off events to the browser and keep our place in the code.

## The Call Stack

The last-in, first-out approach for evaluating logic, like a stack of books. A tool JavaScript uses to keep place in our code. The code pauses when it calls any function and waits until it's done before resuming.

[MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```js
const randomWordAPI = 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
const promise = fetch(randomWordAPI).then(gotData).catch(gotErr);

function gotData(data) {
console.log(data);
}

function gotErr(err) {
console.log(err);
}

// Can be condensed into...
let randWord = 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
fetch(randWord){
.then(response => response.json())
.then(data) => console.log(data)
.catch(err) => console.log(err);
}
```

## Creating Your Own Promises

```js
const delayedColorChange = (color, delay) => {
return new Promise(function (resolve, reject) {
setTimeout(() => {
document.body.style.backgroundColor = color;
resolve();
});
}, delay);
};

deyaledColorChange("red", 1000)
.then(() => delayedColorChange("orange", 1000))
.then(() => delayedColorChange("yellow", 1000));
```

## AJAX and APIs

Making requests via JavaScript

-   **AJAX:** Asynchronous JavaScript and Xml
-   **AJAJ:** Asynchronous JavaScript and JSON
-   **Web APIs:** Web Application Programming Interface. Requesting JSON, not HTML pages. Exposes certain endpoints that respond with bare-bones information for software to use.
-   **JSON:** A format for sending raw data. Superceded XML

	JSON Example:

	```json
	{
	"squadName": "Super Hero Squad",
	"homeTown": "Metro City"
	}
	```

### JSON.parse

Transforms a JSON string into JSON.

```js
JSON.parse(text)
JSON.parse(text, reviver_function) // Revivers are user-defined functions that format data before parsing into JSON.
}

JSON.stringify(value, [replacer, space]) // Transforms JSON into a JSON string.
```

### Testing API Requests

-   [Hoppscotch.io](https://hoppscotch.io/) - Alternative to Postman
-   [SWAPI - Star Wars API](WAPI.dev)

### HTTP Verbs and Status Codes

Verbs:

> GET, POST, PUT ... Different ways of making requests.

Status Codes:

Codes that indicate whether a specific HTTP request has been successfully completed. You'll get a number

-   Informational responses (100–199)
-   Successful responses (200–299)
-   Redirection messages (300–399)
-   Client error responses (400–499)
-   Server error responses (500–599)

### Query Strings

Example: `https://duckduckgo.com/?q=fennec+fox&t=h_&ia=web`

### Fetch API

[MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

#### Method 1:

-   Get a promise from Fetch.
-   Return the JSON out of Fetch.
-   Display the data you fetched.

	```js
	fetch("https://swapi.dev/api/people/1/")
	.then((resolve) => {
	console.log("RESOLVED!", resolve);
	return resolve.json();
	})
	.then((data) => {
	console.log("JSON DONE", data);
	})
	.catch((error) => {
	console.log("ERROR!", error);
	});
	```

	Method 2:

-   Make this into an ASYNC function.

	```js
	const starWarsAsync = async () => {
	const resolve = await fetch("https://swapi.dev/api/people/1/");
	const data = await resolve.json();
	console.log(data);
	};
	```

	Method 2.5:

-   Wrap this function in a TRY/CATCH:

	```js
	try {
	const starWarsAsync = async () => {
	const resolve = await fetch("https://swapi.dev/api/people/1/");
	const data = await resolve.json();
	console.log(data);
	} catch (error) {
	console.log("Error encountered.", error);
	}
	};
	```

	Not a fan of parsing a separate JSON stream as part of your request ritual? Good news! AXIOS is an even _simpler_ way to make these kinds of requests as well...

## AXIOS

A library for making HTTP requests. This is a separate library from JavaScript. This will use Fetch for you, parse the JSON, and fill in the data of your resolved request.

To include this in your projects, add this to the bottom of your BODY section in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Example with Star Wars API:

```js
try {
const getSWPerson = async () => {
const res = await axios.get("https://swapi.dev/api/people/1");
};
} catch (error) {
console.log("Error:", error);
}
```

### Setting Headers in AXIOS:

Ways to sift through the extra HTML and get to your JSON data. Some APIS will default to giving you HTML. Here's how to fix that...

```js
const getJoke = async () => {
const config = { headers: { Accept: `application/json` } }; // THIS WILL VARY BETWEEN APIS. READ THE DOCS.
const res = await axios.get(`https://icanhazdadjoke.com/`);
console.log(res.data.joke);
};
```

# Prototypes, Classes, and OOP
### Factory Functions
Modular functions to be assembled at operation. Go from these:
```js
function hex(r,g,b) {
return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}
function rgb (r,g,b) {
return 'rgb(${r}, ${g}, ${b})';
}
```

To THIS: :grin:

```js
function makeColor (r,g,b) {
const color = {};
color.r = r;
color.g = g;
color.b = b;

color.rgb = function() {
const {r,g,b} = this;
return 'rgb(${r}, ${g}, ${b})';
}
color.hex = function (){
return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}
return color
}
```
HOWEVER, cool as this is, this isn't the most popular way. A better one is ahead... :)

### Constructor Functions (The Better Way)
In the above, each color function has its own RGB value. But, there's no good reason to keep a copy of the function itself on the object. To be more efficient, here's how to separate out the functions.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

```js
// The NEW keyword does the following:
// Creates a blank JavaScript object
// Links (sets the constructor of) this object to another object.
// Passes the newly created object from step 1 as the THIS context.
// Returns THIS if the function doesn't return its own object.

function Color(r,g,b) {
this.r=r;
this.g=g;
this.b=b;
console.log(this)
}

// Define 
Color.prototype.rgb = function(){
const {r,g,b} = this;
return 'rgb(${r}, ${g}, ${b})';
}

Color.prototype.rgba = function(a=1.0) {
const {r,g,b,a} = this;
return 'rgb(${r}, ${g}, ${b}, ${a})';
}

// Assign me like this:
const color1 = new Color(40,50,60)
const color2 = new Color(10,10,255)

// Call me like this:
color1.rgb()
color1.hex()
```
But WAIT! There's an even better way that's not so messy using the Class syntax.

### JavaScript Classes (The Much More Better Way)
```js
// Define a class. What does it mean to be a color...?
class Color {
// This executes immediately whenever a NEW Color is created.
// Add these as properties on the object returned:
constructor (r,g,b, name) {
this.r = r;
this.g = g;
this.b = b;
this.colorName = name;
}
rgb(){
// Destructure the rgb object to THIS.
const {r,g,b} = this;
return 'rgb(${r}, ${g}, ${b})';
}
rgba(){
const {r,g,b,a} = this;
return 'rgb(${r}, ${g}, ${b}, ${a})';
}
}

const color1 = new Color(255,67,89, 'tomato');
```

#### More Classes Practice
- [Lesson Link](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/23344430#overview)
- [Coding Train: JavaScript Classes](https://www.youtube.com/watch?v=T-HGdc8L-7w)

### Extends and Super Keywords
More power-ups for your arsenal.

#### EXTENDS:
To avoid re-using functionality, take this:

```js
class Cat {
constructor(name,age){
this.name = name;
this.age = age;
}
eat(){
return `${this.name} is eating.`;
}
meow(){
return `MEOWWW!!`
}
}

class Dog {
constructor(name,age){
this.name = name;
this.age = age;
}
eat(){
return `${this.name} is eating.`;
}
bark(){
return `BJORK.`
}
}
```
To the next level:
```js
// Separate duplicate functionality to its own Class:
class Pet {
constructor(name,age) {
this.name = name;
this.age = age;
}
eat() {
return `${this.name} is eating.`;
}
}

// Reintroduce your unique classes but have them
// EXTEND the Pet class above:
class Dog extends Pet {
bark() {
return `BJORK.`
}
}

class Cat extends Pet {
meow() {
return `MEOWWW!!`;
}
}

// Use me like this. Will fall back to the parent Pet Class
// if I don't find a constructor in your Cat or Dog Classes.
cont wyatt = new Dog ('Wyatt, 13');

// Also like this:
wyatt.eat() // Returns: "Wyatt is eating."
```

#### SUPER
References the "Super" Class - (in this case, the Pet Class.)

Take this:
```js
class Pet {
constructor(name,age) {
this.name = name;
this.age = age;
}
eat() {
return `${this.name} is eating.`;
}
}
// I want to add unique constructor stuff:
class Cat extends Pet {
constructor(name, age, livesLeft = 9){
this.name = name;
this.age = age;
this.livesLeft = livesLeft; // NEW INFO
}
}
```
To a condensed version like this:
```js
class Pet {
constructor(name,age) {
this.name = name;
this.age = age;
}
eat() {
return `${this.name} is eating.`;
}
}
// Remove the duplication and add a reference to the super (Pet) class.
class Cat extends Pet {
constructor(name, age, livesLeft = 9){
super(name,age); // References and extends the super (Pet) class.
this.livesLeft = livesLeft;
}
}

```
## Exploring the Terminal
Here's the doorway to the back-end content on the server side. Ohhh yes... :)

Let's shift from making static pages to making dynamic pages.
- Speed
- Access to Powerful OS Settings
- Tools Like Node, Express, etc...

	---
- **Terminal**: A text-based interface to your computer. Originally a physical object, but now we use software terminals.
- **Shell**: The software that runs on the terminal. (bash, zsh, etc...)

### Windows Terminal and Shell Installation
[YouTube - Installing Git Bash on Windows 10](https://www.youtube.com/watch?v=qdwWe9COs9k)

### Common Commands
- **pwd** Print Working Directory
- **ls** List (directory contents)
- **cd** Change Directory
- **~** Home Directory
- **mkdir** Make 1 or More Directories
- **man** Manual pages of any command
- **touch** Creates files. Include an extension.
- **rm** Remove a file
- **rmdir** Remove an EMPTY directory
- **sudo rm -r [dir name]** Recursively delete a directory and everything in it. DANGEROUS.

### Relative vs. Absolute Paths
- **Relative Path**: A path to a file or folder relative to the current folder.
- **Absolute Path**: A specific path to a file or folder regardless of your location.

## NODE.JS
JavaScript that runs outside of  the browser.
- Installation
- Node REPL (Like JavaScript Console)
- Running Node Files
- Process
- argv
- File System Module (read/write files using JavaScript!!)

### Intro to Node
Node is a JavaScript runtime, allowing us to run JavaScript outside of the web browser. You can use the syntax you know and love to write JavaScript on the server side. :)

[Reddit - Node vs. Deno](https://www.reddit.com/r/node/comments/nx9qqr/deno_vs_nodejs_a_comparison_you_need_to_know/)

## Node Documentation

[Node Docs](https://nodejs.org/api/)


What can you do with Node?
- Web Servers
- Command Line Tools
- Native Apps (VS Code is a Node app!!)
- Video Games, etc...

	Node is everywhere...
- NASA
- Netflix
- VS Code
- Slack (amped up with Electron)
- Twitch, etc...

### The Node REPL
Read, Evaluate, Print, Loop.

It's a JavaScript console in the cmd line!

STUFF YOU WON'T HAVE HERE:
- document
- window
- any subsequent DOM elements

	So, where is your global object?
- global :grin:

	STUFF YOU HAVE INSTEAD:
- Operating system modules for files and folders, etc...

	To run a .js file from Node, type:
	```
	node yourfile.js
	```

### Process and Argv
***process*** Provides information about and control over the current Node.js process. It's always available to Node.js applications without using require().

***process.argv*** Returns an array containing the command line arguments passed when the Node.js process was launched.

- First Element: process.execPath (where you ran Node from)
- Second Element: path to the JavaScript file being executed.
- Anything afterwards are the arguments you define when you run the script.


### Node and the File System - An Ongoing Saga
`fs` - File System Module

Let's make a Node script that creates the following files/folders in the following format:

`node boilerplate.js [project_folder]`
```
[project_folder]
	- index.html
	- styles.css
	- app.js
	```
	```js
	const fs = require('fs'); // Import the fs module

	// Store your own argument as a variable.
	const folderName = process.argv[2] || 'NewFolder'

	// make a new folder
	fs.mkdirSync(folderName);
	console.log(`Created project folder: ${folderName}`);

	// Make folder contents inside new folder:
	fs.writeFileSync(`${folderName}/index.html`, '');
	fs.writeFileSync(`${folderName}/styles.css`, '');
	fs.writeFileSync(`${folderName}/app.js`, '');
	```
## Modules and NPM
- Module.Exports
- Requiring Modules
- Using NPM
- Installing Packages
- Creating Package.json files

### Working With `module.exports`
Ways to share .js scripts between files. Sharing is caring! :)

```js
// File One:
const add = (x,y) => x + y;
module.exports.add = add;
```
```js
// File Two
require('./path_to_your_js_file')
```

Or, you could do it twice as clean:

```js
// File One:
exports.add = (x,y) => x + y;
```
```js
// File Two:
require('./path_to_your_js_file')
```

### Requiring an ENTIRE DIRECTORY:
```js
// required_folder/index.js
const blue = require('.blue')
const sadie = require('.sadie')
const tommy = require('.tommy')

const allCats = [blue, sadie, tommy]
module.exports = allCats
```
```js
// File calling required_folder
// This looks for an index.js file first and
// requires whatever index.js requires.
const required_folder = require(./required_folder)
```
## NPM (Node Package Manager)
```cmd
npm install name-of-package
```
### Creating Package.json Files
Contains a record of all the packages and their ALL-IMPORTANT DEPENDENCIES for your project. This is super useful if you're sharing your project and want the recipient to have all the dependencies you do.
Create this file using a specific command:

```
mkdir test
cd test
npm init
```
This will walk you through the initial Node setup process. Now, you can install packages while you're inside your project. When you do, `npm` will add them and their dependencies into your `package.json` file. It's a record of everything you're using in the project.

### :star: Installing All the Depencies for a Project :star:

If you're sharing a Node project, don't include your `node_modules` folder. Include your `package.json` file and let your recipient install your dependencies themselves.

If you're the recipient developer of a `package.json` file, run `npm install` from the root directory of your shared project and it'll read `package.json`, find all the project dependencies, and hit all the get 'em links.

### Language Guesser Challenge
Slap these projects together, type in some language in the command line, and POOF! It'll guess the language you typed in.
```
https://github.com/wooorm/franc
https://github.com/adlawson/nodejs-langs
```
# Creating Servers With Express

Express is a web development framework that helps servers get up and running with Node. 
- Listens to incoming requests
- Figure out what the user is asking for
- Crafts an http response and associated content

	**Library:** Something that's integrated into your code at any point. You decide when and how to incorporate it into your code.

	**Framework:** Provides the structure for an application and you follow the framework's rules.

	Navigate to the directory you'd like your project, then:
	```bash
	cd Project/directory
	npm init -y
	npm install express
	```

	Inside your app.js:
	```js
	const express = require('express');
	const app = express()

	// Trigger this every time a request is made. Then, respond with content!
	// response.send() sends an HTTP response via JSON.
	app.use((request,response)=> {
	console.log("Request received!")
	response.send('<h1>This is a h1 header!</h1>')
	})

	// All we need to open up a server is to start listening. :)
	// localhost:3000
	app.listen(3000, () => {
	console.log("Listening on port 3000...")
	})
	```
## Express Routing Basics
Routing: Taking incoming requests and paths (/dogs, /help, etc...) and match them up with code.
Let's expand the above example a little bit.
```js
const express = require('express');
const app = express()

// Trigger this every time a request is made. Then, respond with content!
// response.send() sends an HTTP response via JSON.
// app.use((request,response)=> {
// 	console.log("Request received!")
// 	response.send('<h1>This is a h1 header!</h1>')
// })

// Respond to GET requests.
app.get('/', (request,response)=>{
response.send('This is the home page.')
})
app.get('/cats', (request,response)=>{
response.send('MEOW! Cat request!')
})

app.get('/birds', (request,response)=>{
response.send('WANNA TREATTREAT? CHIRP!')
})

app.post('/birds', (request,response)=>{
response.send('HOOT HOOT! This is a POST request!')
})

app.get('*', (request,response)=>{
response.send("I don't know that path.")
})

// All we need to open up a server is to start listening. :)
// localhost:3000
app.listen(3000, () => {
console.log("Listening on port 3000...")
})
```

## Express Path Parameters
Enough with hard-coding our responses. Time to template and variable it up!
Add this to the middle of the above code:

```js
// Define and match a pattern, like Reddit for example.
app.get('/r/:subreddit/:postID', (request,response) => {
const {subreddit,postID} = request.params;
response.send(`<h1>Viewing Post ID: ${postID} in the ${subreddit} Subreddit.</h1>`)
})
```

Now, `http://localhost:3000/r/birds/birdfur` will respond with:

```html
<h1>Viewing Post ID: birdfur in the birds Subreddit.</h1>
```

## Express with Query Strings
**Query String:** A portion of a URL that comes after a `?`

For example, on MDN, this looks like:
`https://developer.mozilla.org/en-US/search?q=searchterm`

In our script, it would look something like this:
```js
app.get('/search', (request,response)=> {
const {q} = request.query;
if(!q) {
response.send("If something is not in our records, it does not exist!")
}
response.send(`<h1>Search results for: ${q}</h1>`)
})

```

## Auto-Restart Node Server with Nodemon
Nodemon restarts the server every time it sees a .js change.

This is more specific than the `live-server` command and works primarily with Javascript and Node projects.
Global package! Use anywhere!
```bash
npm install -g nodemon
```

Then, start your server with:
```bash
nodemon [your node app]
```

# Creating Dynamic HTML With Templating
- What is templating? (Using EJS)
- Configuring Express to work with EJS (Embedded JavaScript)
- Passing Data from a Node App to Templates
- Serving Static Assets
- Creating Partials
- EJS Loops and Conditionals

## What is Templating?
Problemo: 

**Templating**: Allows us to define a preset "pattern" for a webpage that we can dynamically modify.

We could define a single "Search" template that displays all the results for a given search term. We don't know what the term is or how many results there are ahead of time. The webpage is created on the fly.

There are multiple ways to do this:
**EJS (Embedded JavaScript)**
**Handlebars**
**Jade**
**Nunjucks**

All these options output HTML. However, their syntax  is different.

## Configuring Express for EJS
```bash
npm init -y
npm i express
npm i EJS
npm i -g nodemon
touch index.js
mkdir views/home.ejs
```

Express App:
```js
// Initialize our app.
const express = require('express');
const app = express();
app.get('/', (request,response) => {
// Testing...
response.send("HI!")
// Render our home.ejs file. Any time an .ejs file sees JavaScript,
// it will evaulate it and spit out HTML.
response.render('home.ejs')
})

// Set EJS parameters. Make sure your project has a directory
// named 'views' so our app can use this code.
app.set('view engine', 'ejs')

// Listen on a port.
app.listen(3000, () => {
console.log("Listening on port 3000.")
})
```

home.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML 5 Boilerplate</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<script src="#####"></script>
</body>
</html>
```

## Minor Issue: Fixing the Views Directory
If we run our Node app outside its' folder, it fails to look up any other linked files. Fix this by adding this:

```bash
# Find our current working directory:
node
process.cwd()

# Something like '/Users/coltsteele/Code/Exercises/Express_Templating'
```

```javascript
// Make your app runnable anywhere!
const path = require('path')
// Take our current directory name and join that path to our /views directory.
app.set('views', path.join(__dirname, '/views'))
```

Confused? Me too. The [Node.js Path Documentation](https://nodejs.org/api/path.html) is here to help.

## EJS Interpolation Syntax
It's souped up HTML. Learning the basic syntax to "fill in the blanks" like Mad Libs.

###**Tag syntax**
- <%=stuffhere%>**Evaluates `stuffhere` as JavaScript, then outputs the value into the template (HTML escaped)

## Passing Data to Templates

Best practice: Our templates should just display data. They should be as stupid as possible, pulling data from our index.js file as needed.

Add these lines to your `index.js` file:
```javascript
// Add a new path. This page will display a random number from 1 to 10
app.get('/random', (request,response) => {
const num = Math.floor(Math.random()*10)+1;
response.render('random', {rand : num});
// :
// response.render('random', {num}
})
```

New file! `random.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Hello, world!</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="" />
</head>

<body>
<h1>Your random number is: <%= rand %></h1>
</body>
</html>
```

## Reversing Direction: Passing Data to resolve.render()
Subreddit Template Demo

Add these lines to your app.js:
```javascript
app.get('/r/:subreddit', (request,resolution) => {
const {subreddit} = request.params
resolve.render('subreddit', {subreddit});
})
```

```html
// subreddit.ejs
<body>
<h1>Browsing the <%= subreddit %> subreddit.</h1>
</body>
```

This is the first step to looking up information in a database, then passing that data to resolve.render() to display the result.

## Conditionals in EJS
Doesn't look like a best practice, but here's a way to add logic inside your template.
Yes, this is exactly the thing we cautioned against two sections ago.

Uses a new tag:
- **<% %>**: `Scriptlet` tag, for control-flow, no output

	Example 1 - Simple logic using a ternary operator:
	```html
	<h2><%= num%2===0 ? 'This number is even!' : 'This number is odd.' %></h2>
	```
	<head>
	<meta charset = "UTF8">
	<title>My Site</title>
	</head>

	Example 2 - Complex logic allowing for more markup and stuffs:
	```html
	// Don't forget to surround every line of embedded logic with your tag.
	<% if (num%2 === 0) { %>
	<h2>That's an even number!</h2>
	<% } else { %>
	<h2>That's an odd number!</h2>
	<% } %>
	```
	We also use these braces a lot is in LOOPING!

## Loops in EJS

Take some data and format each chunk using loops. :)
```javascript
// app.js
app.get('/cats', (request,response) => {
const cats = ['Pete', 'Callie', 'Rosebud', 'Whiskers', 'Pumpkin']
resolve.render('cats', {cats})
})
```

```js
// cats.ejs
<h1>All the cats:</h1>

<ul>
<% for (let cat of cats){ %>
<li><%= cat %></li>
<% } %>
</ul>

```

## More Complex Reddit Example
Using some JSON data to mimic what we might get back from a database, parse it into readable HTML using the skills described above.

File structure:
```bash
app.js
public
styles.css
views
home.ejs
subreddit.ejs
```

### app.js
```js
const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json')

// Set the views directory. Make this runnable anywhere!
app.set('views', path.join(__dirname, '/views'));


// Serve static files from THIS folder. Make sure you create these directories
// and join this directory so it doesn't break when you run your app outside the directory.
// __dirname is the ABSOLUTE path to the app.js file.
app.use(express.static(path.join(__dirname, 'public')))

console.log(redditdata)

// Set the view engine to ejs.
app.set('view engine', 'ejs')

// Home directory
app.get('/', (request,resolve) => {
resolve.render('home')
})

// Define a pattern like Reddit and match it.
app.get('/r/:subreddit', (request,resolve) => {
const { subreddit } = request.params;
// Drill into the subreddit info.
const data = redditdata[subreddit]

// Pass the JSON data as an array of arguments with the rest operator.
resolve.render('subreddit', { ...data});
})

app.listen(3000, ()=> {
console.log("Listening on port 3000.")
})
```

### data.json
```json
{
"soccer": {
"name": "Soccer",
"subscribers": 80000,
"description": "The football subreddit. News, results and discussion surrounding your favorite black and white sphere on the pitch.",
"posts": [
{
"title": "Marten de Roon to make pizza for more than 1,000 rabid fans. Streetgoers rejoice!",
"author": "joeextreme"
},
{
"title": "Stephan Lichtsteiner has retired from professional wrestling to join our ranks.",
"author": "odd person"
},
{
"title": "OFFICIAL: Dani Parejo signs for Villareal.",
"author": "joeextreme"
}
]
},
"chickens": {
"name": "Chickens",
"subscribers": 666633,
"description": "A place to post your chicken-related questions and media.",
"posts": [
{
"title": "He always tries to lie on top of the eggs, so we put ping pong balls in the egg carton.",
"author": "joeextreme",
"img": "https://i.redd.it/9pcjc67xo5ca1.jpg"
},
{
"title": "Is this Barred Rock a Rooster or Hen?",
"author": "catspajamas_550",
"img": "https://preview.redd.it/pij5yolfi8ca1.jpg?width=3024&format=pjpg&auto=webp&v=enabled&s=4130514482c781a4231fccbe36fcbf0311be8513"
},
{
"title": "Pics of my Chicken :)",
"author": "birdbrain90",
"img": "https://preview.redd.it/we5y35yqv4ca1.jpg?width=3072&format=pjpg&auto=webp&v=enabled&s=b4d00097a3d1a8a3a145c0f21bfd158652acdd33"
}
]
},
"mightyharvest": {
"name": "Mighty Harvest",
"subscribers": 9001,
"description": "Feeding many villages and village idiots for 10s of days.",
"posts": [
{
"title": "Making pumpkin soup for the entire town. Or possibly ending world hunger",
"author": "IndiaCee",
"img": "https://i.redd.it/817afo07g7ca1.jpg"
},
{
"title": "Behold the harvest that could feed earth twice",
"author": "samtheonlyone",
"img": "https://external-preview.redd.it/qr4Bof4NjtaBvNuJIPsTd22YUagwDZAB82j-0oO5Blk.jpg?auto=webp&v=enabled&s=c1a2163331cefac5cd3ca6240a1db15a366bf81b"
},
{
"title": "Enough for me and all my friends",
"author": "customerservice_",
"img": "https://i.redd.it/vkxybhdizaba1.jpg"
}
]
}
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><%= name %></title>
<link rel="stylesheet" href="/styles.css"
</head>
<body>
<h1>Behold the <%= name %> subreddit!</h1>
<h2><%= description %></h2>
<p><%= subscribers %> total subscribers</p>

<hr>

<% for(let post of posts){ %>
<article>
<p><%= post.title %> - <b><%= post.author %></b></p>
<% if (post.img) { %>
<img src="<%= post.img%>" alt="">
<% } %>
</article>
<% } %>
</body>
</html>
```

## Serving Static Files in Express
START HERE: [Serving Static Files in Express]( https://expressjs.com/en/starter/static-files.html )

Use `express.static(root, [options])` as **middleware** to serve static files on EVERY single request.
### Using Bootstrap With Express
File structure:
```text
public
css
bootstrap.min.css

js
bootstrap.min.js
jquery.js
```

1. Download jquery from [ https://jquery.com/ ]( jquery.com )
2. Download bootstrap from [ https://bootstrap.com ]( bootstrap.com )
3. Load jquery before Bootstrap so it works:

```html
<!-- subreddit.ejs -->
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/js/jquery-3.6.3.min.js">
<link rel="stylesheet" href="/js/bootstrap.min.css">
```

## Partials and EJS
**Partials**: Templates inside templates. TEMPLATECEPTION!!!

Boo! No one likes pasting the same data twice! Here's a way to include parts of pages on ALL THE PAGES!!

`<%-><%>` Outputs the unescaped HTML to the page.

File structure:
```txt
Partials
head.ejs
```
```html
<!-- head.ejs -->
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- <title><%= name %></title> -->
<link rel="stylesheet" href="/styles.css"
</head>
```

```html
<!-- other views.ejs -->
<body>
<!-- stuff here -->
</body>
```

# Defining RESTful Routes
- GET vs. POST Requests
- Parsing the Request Body
- Forms and Express
- Method Override
- Handling POST Requests in Express
- RESTful Routing (optional standard to structure routing)

## GET vs. POST Requests

- **GET Request**: Used to retrieve information. Data is sent via a query string. Information is plainly visible in the URL. Limited amount of data can be sent.
- **POST Request**: Used to post data to the server. Used to write/create/update information. Data is sent via request body, not a query string visible in the URL. Can send any sort of data. (JSON!!)

	POST requests are usually more versatile than GET requests because they can send so many different data types.

	How do you route POST requests with Express? That's the next section.

## Defining Express Post Routes
Inside your app.js Express app, add the following lines:

```javascript
// App.use is a way to run some code or function
// on every request. This is all you need! :)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
```
## Intro to REST
**REpresentational State Transfers**
A set of guidelines for how clients and servers should communicate.

We're going to create APIs and routes that follow these guidelines.

## RESTful Comments Project - Overview

One way to make a REST-compliant routing is to do the following:

1. Match different HTTP verbs (GET, POST, etc...) with a base pluralized URL (resource)
2. Add an ID when appropriate

- GET /comments - list all comments
- POST /comments/ - Create a new comment
- GET /comments/:id - Get one comment (using ID)
- PATCH /comments/:id - Update one comment
- DELETE /comments/:id - Delete one comment

## Method-Override
Using forms, we can only send GET and POST requests. However, we can trick the form into sending other types of requests using this `node` library.


**Middleware:** method-override (http://expressjs.com/en/resources/middleware/method-override.html)
Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.

`npm install method-override`

# Our First Database: MongoDB

- Database Basics
- SQL vs. NoSQL
- Installation
- The Mongo Shell
- Mongo Inserts
- Mongo Updates
- Mongo Finding/Querying
- Mongo Deletions

	The syntax is basically Javascript. However like any new tool we use, it's something that we have to try and understand by reading the documentation.

## Introduction to Databases

### Why Bother With a Database?
- Databases can handle large amounts of data efficiently and store it compactly.
- They provide tools for easy insertion, querying, and updating of data.
- They generall offer security features and control over access to data.
- They generally scale well.
- Everyone is using one. We can't be left without one.

## SQL vs. NoSQL Databases
**SQL Databases:** Structured Query Language databases are relational databases. We pre-define a schema of tables before we insert anything.
- Kind of like spreadsheets. You need to define a structure FIRST, then everything inside it MUST fall into that structure. We even capitalized the word MUST for extra clickbait. If you're reading this, you're part of the problem.

	**NoSQL Databases:** NoSQL databases do not use SQL. There are many types of these, including document, key-value, and graph stores.
- These are newer and work in many different ways. No pre-defined schema is required.

## Why We're Learning MongoDB
- Mongo is very commonly used with Node and Express
- It's easy to get started with (though it can be tricky to truly master).
- It plays well with JavaScript
- Its popularity also means there is a strong community of developers using Mongo.

## Basic Mongo Commands

- **Create a Collection**: `db.[collection]`
- **Insert a Single Document**: `db.[collection].insertOne( [data_here] )` or `db.[collection].insertOne([{ObjectOne}, {ObjectTwo}...])`
- **Show All Collections**: `show collections`
- **Show All Collection Contents**: `db.[collection].find()`
- **Search By Attribute**: `db.[collection].find({key: value, key: optionalvalue})` and so on.
- **Update One Document**: `db.[collection].updateOne({key: value}, {$atomic_operator: {key: value, key:value2...}})`

	NOTE: If you update a `key: value` that's not in the document, one wil be created for you.

	[Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
- `$set:` Change a specific key to a value.
- `$unset:` Delete a specific key, value pair. (`{$unset: {catFriendly: ""}}`)

- **Update Many Documents**: `db.[collection].updateMany({key: value, key:value2...}, {$atomic_operator: {key: value, key:value2...}})`
- **Delete One Document**: `db.[collection].deleteOne({key: value})`
- **Delete All Documents in a Collection**: `db.[collection].deleteMany({})` CAREFUL WITH THIS ONE, BRO

### More Operators

Find all dogs in the database whose age is greater than 8:
```js
db.dogs.find({
age: { $gt: 8 }
})
```
- `$lt` less than
- `$lte` less than or equal to
- `$gte` greater than or equal to
- `$ne` not equal to
- `$nin` not in

	LOGIC: Use to combine operators.
- `$and, $not, $nor, $or`

#### $in: Kind of Like OR

Find all dogs whose breed is either "Golden Retriever" or "Dachchund" AND whose age is less than 10:
```
db.dogs.find({
breed: {
$in: ['Golden Retriever', 'Dachchund']
},
age: {
$lt: 10
}
})
```

Find all dogs whose personality is cat friendly OR whose age is less than or equal to 2:

```
db.dogs.find({
$or: [{
'personality.catFriendly': true
},
{
age: {
$lte: 2
}
}
]
})

```
**Clear the mongosh Shell:** <Ctrl-l>

Still confused? Yeah, me too again. Refer to the video below for more info on updateMany, and deleteMany:
[https://www.youtube.com/watch?v=QVmcJK-ZR3o](UpdateMany and deleteMany in mongoDB)

# Connecting to Mongo with Mongoose

- Understanding the role of ORM/ODMs
- Connecting Mongoose to Mongo
- Defining a Model (Schema, etc...)
- Mongoose CRUD (Create, Read, Update, Delete)
- Schema Constraints
- Moden Instance and Static Methods
- Mongoose Middleware
- Mongoose Virtuals

## What is Mongoose? 
Mongoose is an Object Data Mapper
- ODM: A software that maps documents coming from a database into useable JavaScript objects.

	Mongoose provides ways for us to model out our application data and define a schema. It offers easy ways to validate data and build complex queries from the comfort of JS.

## .load index.js Bug!

It seems like there is a potential bug occurring to people who are using the newest versions of Node.js when using the .load index.js command
while requiring the mongoose module and executing the lecture code in the JS file. The bug 
seems to be an infinite loop printing the const mongoose = require('mongoose'); line of code repeatedly.

Instead of using .load index.js inside of the node shell, use the command:

```javascript
node -i -e "$(< index.js)"
``` 
Here's what each part of the command does:
```
   node: This is the command to start the Node.js runtime environment.

	-i: This flag tells Node.js to start the REPL in the interactive mode, which allows you to enter multiple commands and see their output in real-time.

	-e: This flag allows you to execute JavaScript code from the command line.

	"$(< index.js)": This part of the command reads the contents of the index.js file and passes them as input to the -e flag, which then executes the code.
```
Essentially, this command will start the Node.js REPL and execute the code from your index.js file in it. This can be useful for testing individual pieces of code or debugging specific issues without having to run the entire application.

However, keep in mind that this command won't actually run your entire application - it will only execute the code from index.js in the REPL. If you want to run your application and see its output, you should use the node index.js command instead.

## Our First Mongoose Model

Mongoose documentation: https://mongoosejs.com/docs/guide.html

Models are JS classes that we make with the assistance of Mongoose. These classes represent information in a collection inside a MongoDB database.

**Schema** A mapping of different collection keys that define the TYPES of data allowed in your database.

### Require Mongoose and Create your Connection String

```javascript
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/?retryWrites=true&w=majority'
```
### Connect to Mongoose

```javascript
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
console.log("Connection open!")
})
.catch(error => {
console.log(error)
})

mongoose.connection.on("error", function(error) {
console.error(error);
})
```

### Tell the User We're In!

```javascript
mongoose.connection.on("open", function () {
console.log("Connected to MongoDB database")
})
```

### Create a New Schema Object
```javascript
// Create a schema object
const movieSchema = new mongoose.Schema({
title: String,
year: Number,
score: Number,
rating: String,
})
```

### Access the Schema

```javascript
// Access your schema using the Uppercase, SINGULAR version of your schema
const Movie = mongoose.model('Movie', movieSchema)
```

### Create a New Object Based Off the Schema

```javascript
// Create a new object based on the schema.
const amadeus = new Movie({
title: 'Amadeus',
year: 1986,
score: 9.2,
rating: 'R'
})
```

### Save Your Data!

```javascript
// Save your data to the database
// You can call this multiple times, most often after modifying any data in the object.
amadeus.save()
```

## Insert Many With Mongoose

IMPORTANT! This does NOT require you to .save() your object.

```javascript
// insertMany returns a promise. Use .then() to wait, then confirm it worked.
Movie.insertMany([
{ title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
{ title: 'Robots', year: 2001, score: 9.2, rating: 'PG' },
])
.then(data => {
console.log("It worked!")
console.log(data);
})
```
## Finding with Mongoose
> **Side note: Loading from the Node REPL**
> You can load your javascript file directly from the Node REPL.
> 1. In your terminal, navigate to your Node project.
> 2. Type `node` to launch Node.
> 3. Type `node -i -e "$(< index.js)"` to load your file.
>
> Here's what each part of the command does:
> ```
> - `node` This is the command to start the Node.js runtime environment.
> - `-i` This flag tells Node.js to start the REPL in the interactive mode, which allows you to enter multiple commands and see their output in real-time.
> - `-e` This flag allows you to execute JavaScript code from the command line.
> - `"$(< index.js)"` This part of the command reads the contents of the index.js file and passes them as input to the -e flag, which then executes the code.
> ```

## Find()
Returns a promise as well. We have options when we wait.

You can use callbacks, but you can also treat the results we get back LIKE a promise (It's a Mongoose Query). In that case, you can chain on a .then() like so:

```javascript
Movie.find({rating: 'PG'})
.then(data => console.log(data))
```

## Find By ID
These two methods do the same thing. Pick your favorite.

Hint: Mine's the first one. ;)
```javascript
// findById()
Movie.findById('id-here')
.then(data => console.log(data))

// Find by ID
Movie.find(_id: "new ObjectId("id-here")"
.then(data => console.log(data))
```

### Updating with Mongoose
> Note: The following methods aren't resolved with the updated information. Rather, it tells us how many things were modified.

## Update One
```javascript
Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then (response => console.log(response))
```

## Update Many
```javascript
Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log (res))
```

> Note: These methods WILL tell you what they're doing. Woohoo!

## Find One and Update
```javascript
Movie.findOneAndUpdate({title: 'Robots'}, {score: 9.9}, {new: true})
.then (data => console.log(data))
```

## Deleting with Mongoose
## Delete Many
```javascript
Movie.deleteMany({title: 'Robots'})
.then (data => console.log(data))
```
## Find One And Delete
```javascript
mongoosejs.com/docs/api/model.html
```

## Mongoose Schema Validations

