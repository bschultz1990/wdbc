for (let i = 1; i <= 700; i++) {
	let pokemon = document.createElement('img');
	let pokeURL = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', i,'.png']
	pokemon.src = `${pokeURL[0]}${pokeURL[1]}${pokeURL[2]}`;
	document.querySelector('#container').appendChild(pokemon);
}


// let newImg = document.createElement('img'); // Create image
// newImg.src = 'https://d.furaffinity.net/art/jackrow/1319519761/1319519761.jackrow_frisky_corvids_1200x895.png'; // Assign source to image
// document.querySelector('#container').append(newImg); // Add image to container.
