const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {useNewUrlParser: true})
	.then(()=> {
		console.log("Connection open!")
	})
	.catch(error => {
		console.log(error)
	})


mongoose.connection.on("error", function(error) {
	console.error(error);
})

mongoose.connection.on("open", function () {
	console.log("Connected to MongoDB database")
})
