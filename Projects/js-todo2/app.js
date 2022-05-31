const activeForm = document.querySelector("#activeForm");
const list = document.querySelector("#list");

activeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const activeText = document.querySelector("#activeText");
    const activeLi = document.querySelector("#activeLi");

    activeLi.innerText = activeText.value;
    activeLi.classList.add("inactiveLi");
    activeText.remove(); // Remove the active text.

    const newLi = document.createElement("li");
    activeLi.id = "";
    newLi.id = "activeLi";
    list.appendChild(newLi);

    const newText = document.createElement("input");
    activeText.id = "";
    newText.id = "activeText";
    newLi.appendChild(newText);
    newText.focus();

    return (inactiveLi = document.querySelectorAll(".inactiveLi"));
});

// for (let li in inactiveLi) {
//     li.addEventListener("mouseenter", function(e){
//         li.
//     })
// }
