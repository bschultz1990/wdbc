# Javascript Notes

[JS Modules - A Beginner's Guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/)

[More JS Modules](https://www.c0d3.com/)

[Pramp - Mock Interviews](https://www.pramp.com/#/)

## Operators

`2 % 3 // Modulo. Returns the remainder of a division problem.`

## String Methods

### **Slice**

    "string".slice(start, end);
    // Extracts a section of a string and returns a new string.

### **Repeat**

    "string".repeat()
    // constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### **toUpperCase**

    "string".toUpperCase() // CAPITALIZE STRING

### **toLowerCase**

    "string".toLowerCase() // uncapitalize string

### **indexOf**

    "string".indexOf("character here")
    // Returns the index of your string number. Returns -1 if the thing isn't found.

### **Split**

    "stringstuff-otherstuff".split(separator, limit)
    // divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

### **Replace**

Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

    "string".replace()
    .replace(regexp, newSubstr)
    .replace(regexp, replacerFunction)
    .replace(substr, newSubstr)
    .replace(substr, replacerFunction)

Example: remove all spaces in a string:

    let word = "I am a string."
    let newword = word.replace(/\s+/g, ``)
    console.log(newword);
    // Iamastring

### **String Template Literals**

`I counted ${3 + 4} sheep;` // I counted 7 sheep.
Use back tick. Only use inside of strings.
