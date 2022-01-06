const activeForm = document.querySelector('#activeForm');
const list = document.querySelector('#list');

activeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const activeText = document.querySelector('#activeText');
    const activeLi = document.querySelector('#activeLi');

    activeLi.innerText = activeText.value;
    activeText.remove(); // Remove the active text.

    const newLi = document.createElement('li');
    activeLi.id = "";
    newLi.id = "activeLi"
    list.appendChild(newLi);

    const newText = document.createElement('input');
    activeText.id = ""
    newText.id = "activeText";
    newLi.appendChild(newText);
    newText.focus();

    const newEditButton = document.createElement('button');
    newEditButton.innerText = "Edit"
})


// activeText.value

// input.addEventListener('click', function(e){
//     const list = document.querySelector('#list');
//     const lastLi = document.querySelector("#list li:last-of-type");
//
//     list.appendChild(document.createElement('li'));
//     lastLi.appendChild(document.createElement('input'));
// })
