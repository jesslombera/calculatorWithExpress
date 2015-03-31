// At the top of our file we declare variables
// for all of the packages we're going to use
// in the file. For this example, we'll only need
// be using a single package called 'express'.
// We `require('express')` and save the results
// in an appropriately named variable.

var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.
app.get('/math', function(req,res) {

  // Send back the response 'Hello World'

  res.send("To add two numbers write on your route <b>/add/number/number</b><br>" +
  	"To subtract two numbers write on your route <b>/subtract/number/number</b><br>" + 
  	"To multiply two numbers write on your route <b>/multiply/number/number</b><br>" +
  	"To divide two numbers write on your route <b>/divide/number/number</b>");

});

app.get('/add/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var sum = x + y;

   res.send("Answer " + sum) // Your HTML would go here. 
});

app.get('/subtract/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var subtract = x - y;

   res.send("Answer " + subtract) // Your HTML would go here. 
});

app.get('/multiply/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var multiply = x * y;

   res.send("Answer " + multiply) // Your HTML would go here. 
});

app.get('/divide/:x/:y', function(req, res) {
   var x = Number(req.params.x);
   var y = Number(req.params.y);
   var divide = x / y;

   res.send("Answer " + divide) // Your HTML would go here. 
});



// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);