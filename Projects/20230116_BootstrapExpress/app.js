const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json')

// Serve static files from THIS folder. Make sure you create these directories
// and join this directory so it doesn't break when you run your app outside the directory.
// __dirname is the ABSOLUTE path to the app.js file.
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory. Make this runnable anywhere!
app.set('views', path.join(__dirname, '/views'));


// Set the view engine to ejs.
app.set('view engine', 'ejs')

// Home directory
app.get('/', (request,resolve) => {
	resolve.render('home')
})

// Define a pattern like Reddit and match it.
app.get('/r/:subreddit', (request,resolve) => {
	const { subreddit } = request.params;
	// Drill into the subreddit info.
	const data = redditdata[subreddit]

	// Pass the JSON data as an array of arguments with the rest operator.
	resolve.render('subreddit', { ...data});
})

let port = 3000
app.listen(port, ()=> {
	console.log(`Listening on port ${port}.`)
})
