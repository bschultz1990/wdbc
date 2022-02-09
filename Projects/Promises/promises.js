// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
let randWord = 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
fetch(randWord)
  .then(response => response.json())
  .then(data => createHeader(data[0]))
  .catch(err => console.log(err));

function createHeader(data) {
  let newH = document.createElement('h1')
  newH.innerText = data
  document.body.appendChild(newH)
}
