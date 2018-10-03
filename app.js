/*
  This is the entry point for the whole web-app
*/

// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');

// going to use Mongoose to interarct with mongodb
const mongoose = require('mongoose');

const projects = require('./routes/api/projects');

// Bodyparser Middleware
app.use(bodyParser.json());

// Need mongodb uri
//url = "mongodb://localhost:27017/mySite";
const db = require('./config/keys').mongoURI;

// Bring in MongoDB client
//var MongoClient = require('mongodb').MongoClient;
// Need url to connect to a DB
//var url = "mongodb://localhost/projects";

// connecting to mongo with mongoose
mongoose
  .connect(db)
  .then(() => console.log('MDB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/projects', projects);
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/

//  Connect all our routes to our application
app.use('/', routes);

const port = process.env.PORT || 3000;
// Turn on that server!
app.listen(port, () => {
  console.log('App listening on port 3000');
});
