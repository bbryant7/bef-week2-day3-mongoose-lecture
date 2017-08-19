// npm install mongoose@4.10.8 bluebird --save
const mongoose = require('mongoose');
const recipeModel = require('./models/recipe')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');

console.log(new recipeModel.Recipe({name: "Pancakes"}));

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
