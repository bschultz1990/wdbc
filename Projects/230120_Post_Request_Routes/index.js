const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// ROUTING
app.get('/comments', (request, response) => {
	response.render('comments/index', { comments })
})

// Create a new comment
app.get('/comments/new', (request, response) => {
	response.render('comments/new')
})

// Add a new comment.
app.post('/comments', (request, response) => {
	// Make sure we show submitted data on the console.
	const {username,comment} = request.body;
	comments.push({username, comment, id: uuid()});
	// Redirect the user back to the comments index.
	response.redirect('/comments');
})

// View a comment
app.get('/comments/:id', (request, response) => {
	const { id } = request.params;
	const comment = comments.find(c=> c.id ===id);
	response.render('comments/show', { comment });
})


// UPDATE COMMENTS:
// Step 1: Provide backend to update comment.
app.patch('/comments/:id', (request, response) => {
	const { id } = request.params;
	const newCommentText = request.body.comment;
	const foundComment = comments.find(c=> c.id ===id);
	foundComment.comment = newCommentText;
	response.redirect('/comments');
})

// Step 2: Make a route to serve a form to update the comment.
app.get('/comments/:id/edit', (request, response) => {
	const {id} = request.params;
	const comment = comments.find(c=> c.id ===id);
	response.render('comments/edit', { comment });
})





// FAKE DATA
const comments = [
	{
		id: uuid(),
		username: 'TheDarthVaderOfficial',
		comment: 'You are not a Jedi yet...'
	},
	{
		id: uuid(),
		username: 'LukeSkywalker',
		comment: 'That\'s not true. That\'s impossible!'
	},
	{
		id: uuid(),
		username: 'DexterJettster',
		comment: 'Depends on how good your manners are, and how big your... pocketbook is.'
	},
	{
		id: uuid(),
		username: 'Martian',
		comment: 'LEMONAAAAADE!!!!!!'
	}
]


app.listen (3000, ()=>{
	console.log('Listening on Port 3000')
})
