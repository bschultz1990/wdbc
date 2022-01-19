// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');

form.addEventListener("submit", function(e) {
  e.preventDefault;

  const newLi = document.createElement("li");
  newLi.innerText = `${quantity.value} ${product.value}`; // Assign new li your custom text.
  list.appendChild(newLi);
  quantity.value = "";
  product.value = "";
  product.focus();
})
