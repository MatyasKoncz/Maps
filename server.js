var express = require('express');
var app = express();
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:3003','http://86.59.230.107:3003'],
};

app.use(cors(corsOptions));
// set the view engine to ejs
app.set('view engine', 'ejs');

// Css, Js
app.use(express.static(__dirname + '/public'));


// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

app.listen(3003);
console.log('Server is listening on port 3003');