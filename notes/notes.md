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
