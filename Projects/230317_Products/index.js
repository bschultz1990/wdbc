// boilerplate code goes here.
// External dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Parse extended urls and convert into a JavaScript object
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies.
app.use(express.json())

// Override HTTP verbs to allow PUT or DELETE requests.
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

// Set view engine and path.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set paths
app.get('/', (request,response)=>{
  response.send('TESTING');
})

// Listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

const Product = require('./models/product');

// Mongoose section
const connectionString = 'mongodb+srv://bschultz1990:krfofrgrmfrt0-60-@wdbc.rrnu9ou.mongodb.net/test';
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection open!")
  })
  .catch(error => {
    console.log(error)
  });

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database")
});


