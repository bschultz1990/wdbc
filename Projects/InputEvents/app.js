let h1 = document.querySelector('h1');
let username = document.querySelector('#username');

username.addEventListener('input', function(e){
  if (username.value !== "") {
    h1.innerText = `Welcome, ${username.value}`;
  }
  else {
    h1.innerText = "Enter Your Username"
  }
});
