const colorButton = document.querySelector('#btn_color');
colorButton.addEventListener('click', randomcolor);

function randomcolor() {
    let red = Math.floor(Math.random()*255 + 1);
    let green = Math.floor(Math.random()*255 + 1);
    let blue = Math.floor(Math.random()*255 + 1);

    const body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    const colorheader = document.querySelector('#colorheader')
    colorheader.innerText = `rgb(${red},${green},${blue})`;
}
