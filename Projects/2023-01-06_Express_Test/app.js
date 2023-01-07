const express = require('express');
const app = express()

app.use(()=> {
	console.log("Request received!")
})

app.listen(3000, () => {
	console.log("Listening on port 3000...")
})
