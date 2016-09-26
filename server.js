// require express and other modules
var express = require('express'),
    app = express();
var db = require('./models')
// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', function(req, res) {
  res.sendFile(__dirname + '/views/profile.html');
});

app.get('/api/campsites', function(req,res) {
  db.Campsite.find({}, function(err, allCampsites) {
  if (err) {return console.log("Error: " + err)}
  res.json(allCampsites);
  })
})

app.get('/api/campsites/:id', function(req,res) {
  var siteId = req.params.id;
  db.Campsite.find({_id: siteId }, function(err, data) {
    if (err) {return console.log("error")};
      res.json(data)
  })
})

app.put('/api/campsites/:id', function(req,res){
  var campsiteId = req.params.id;
  var updateCampsites = campsites.findIndex(function(element, i) {
    return (element._id === parseInt(req.params.id));
  });
  var siteToUpdate = campsites[deleteSiteIndex];
  campsites.splice(updateCampsites, 1, req.params);
  res.json(req.params);
})

app.post('/api/campsites/', function(req,res) {
  var newCampsite = new db.Campsite(req.body);
  newCampsite.save(function handleDBCampsiteSaved(err, savedCampsite) {
    res.json(savedCampsite)
  })
})

app.put('/api/campsites/:id', function(req,res){
  var campsiteId = req.params.id;
  var updateCampsiteIndex = campsites.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id));
  });
  console.log('updating campsite with index', updateCampsiteIndex);
  var campsiteToUpdate = campsites[updateCampsiteIndex];
  campsites.splice(updateCampsiteIndex, 1, req.params);
  res.json(req.params);
});

app.delete('/api/campsites/:id', function(req,res) {
  var siteId = req.params.id;
  db.Campsite.findOneAndRemove( {_id: siteId } , function(err,deletedCampsite) {
    res.json(deletedCampsite)
  })
})

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know about the site!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "An exerpt of my memoir"},
      {method: "GET", path: "/api/campsites", description: "Tells you about some of my favorite campsites I've stayed at"},
      {method: "GET", path: "/api/campsites/:id", description: "Find a specific campsite"},
      {method: "DELETE", path: "/api/campsites/:id", description: "Get rid of a campsite that isn't good enough"},
      {method: "POST", path: "/api/campsites", description: "Create a new favorite campsite"},
      {method: "PUT", path: "/api/campsites/:id", description: "Change an entry"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
