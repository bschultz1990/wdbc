const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// ROUTING
app.get('/comments', (request, response) => {
	response.render('comments/index', { comments })
})

app.get('/comments/new', (request, response) => {
	response.render('comments/new')
})

app.post('/comments', (request, response) => {
	// Make sure we show submitted data on the console.
	const {username,comment} = request.body;
	comments.push({username, comment})
	response.send("IT'S WORKING! IT'S WORKING!!!")
})

// FAKE DATA
const comments = [
	{
		username: 'TheDarthVaderOfficial',
		comment: 'You are not a Jedi yet...'
	},
	{
		username: 'LukeSkywalker',
		comment: 'That\'s not true. That\'s impossible!'
	},
	{
		username: 'DexterJettster',
		comment: 'Depends on how good your manners are, and how big your... pocketbook is.'
	},
	{
		username: 'Martian',
		comment: 'LEMONAAAAADE!!!!!!'
	}
]


app.listen (3000, ()=>{
	console.log('Listening on Port 3000')
})
