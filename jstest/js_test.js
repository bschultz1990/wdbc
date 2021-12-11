// Use JS and ClassList to invert which elements have the highling class.
// Iterate over all the <li> elements and toggle the class of 'highlight'
// on each one.

let li = document.querySelectorAll(".changingul li")

for (const i of li) {
    i.classList.toggle("highlight");
}