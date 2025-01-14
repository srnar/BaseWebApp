var express = require('express');
var app = express();

const routes = require('./routes/tea'); // import the routes
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
app.use('/', routes); //to use the routes

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
