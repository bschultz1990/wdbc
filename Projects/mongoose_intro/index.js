const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connection open!")
	})
	.catch(error => {
		console.log(error)
	})

mongoose.connection.on("open", function () {
	console.log("Connected to MongoDB database")
})

// Create a schema object
const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String,
})

// Access your schema using the Uppercase, SINGULAR version of your schema
const Movie = mongoose.model('Movie', movieSchema)

// Create a new object based on the schema.
const amadeus = new Movie({
	title: 'Amadeus',
	year: 1986,
	score: 9.2,
	rating: 'R'
})

console.log(amadeus)

// Save your data to the database
// You can call this multiple times, most often after modifying any data in the object.
// amadeus.save()

// insertMany returns a promise. Use .then to wait, then confirm it worked.
// Movie.insertMany([
// 	{ title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
// 	{ title: 'Robots', year: 2001, score: 9.2, rating: 'PG' },
// 	{ title: 'Where the Red Fern Grows', year: 1974, score: 6.8, rating: 'G' },
// ])
// 	.then (data => {
// 		console.log("It worked!")
// 		console.log(data);
// 	})
