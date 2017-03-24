// require/import the express module
var express = require('express');


var app = express();

//Here we will define a port we want to listen to 
var PORT = process.env.PORT || 3000;

// below function which handles requests and send response
app.get('/', function (req, res) {
  res.send('Express.js is awesome.');
});

// //Lets start our server on port 3000
app.listen(PORT, function () {
  console.log('Server listening on ' + PORT );
});
