const { request, response } = require('express');
const express = require('express');
const app = express()

// Trigger this every time a request is made. Then, respond with content!
// response.send() sends an HTTP response via JSON.
// app.use((request,response)=> {
// 	console.log("Request received!")
// 	response.send('<h1>This is a h1 header!</h1>')
// })

// Respond to all kinds of requests!
// Home page
app.get('/', (request,response)=>{
	response.send('This is the home page.')
})

// Define and match a pattern, like Reddit for example.
app.get('/r/:subreddit/:postID', (request,response) => {
	const {subreddit,postID} = request.params;
	response.send(`<h1>Viewing Post ID: ${postID} in the ${subreddit} Subreddit.</h1>`)
})

app.get('/search', (request,response)=> {
	const {q} = request.query;
	if(!q) {
		response.send("If something is not in our records, it does not exist!")
	}
	response.send(`<h1>Search results for: ${q}</h1>`)
})

// All we need to open up a server is to start listening. :)
// localhost:3000
app.listen(3000, () => {
	console.log("Listening on port 3000...")
})
