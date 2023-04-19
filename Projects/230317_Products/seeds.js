const Product = require('./models/product');
const mongoose = require('mongoose');

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


const p = new Product({
  name: 'Ruby Grapefruit',
  price: 1.99,
  category: 'fruit'
})

p.save()
  .then(p  => {
    console.log(p)
  })
  .catch(error => {
    console.log(error)
  })
