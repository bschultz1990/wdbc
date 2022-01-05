const input = document.querySelector('input');

add.addEventListener('click', function(e){
    const list = document.querySelector('#list');
    const lastLi = document.querySelector("#list li:last-of-type");

    list.appendChild(document.createElement('li'));
    lastLi.appendChild(document.createElement('input'));
})
