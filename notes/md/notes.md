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

Converts everything to a strong, then sorts.
Kind of useless now that we have .map, etc...

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

Const with arrays cares about the memory rerence, not the array contents.
How to access things in arrays in other arrays.

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
        console.log(
            `Hi! My name is ${this.name}! I am the color ${this.color}. I play the ${this.instrument} and my favorite hobby is ${cat.hobby}.`
        );
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
        console.log(
            `Hi! My name is ${cat.name}! I am the color ${cat.color}. I play the ${cat.instrument} and my favorite hobby is ${cat.hobby}.`
        );
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
