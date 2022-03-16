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

````js
"string".replace()
.replace(regexp, newSubstr)
.replace(regexp, replacerFunction)
.replace(substr, newSubstr)
.replace(substr, replacerFunction)
```

Example: remove all spaces in a string:

```js
let word = "I am a string.";
let newword = word.replace(/\s+/g, ``);
console.log(newword); // Iamastring
````

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

## Logical Operators

"
