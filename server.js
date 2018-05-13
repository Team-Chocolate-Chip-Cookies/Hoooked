// server.js

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser=require("body-parser")
var passport   = require('passport')
var session    = require('express-session')
var env        = require('dotenv').load()


//Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 // For Passport
 app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions

//Models
var models = require("./db/models");

// Routes for authroization - Probabbly doesn't work at this point
var authRoute = require('./routes/auth.js')(app,passport);
const IGDB=require("./routes/APIs/IGDB.js")
const bookAPI=require("./routes/APIs/bookAPI.js")

// Routes for input testing
require("./routes/routeTestsDB.js")(app);

//load passport strategies
require('./config/passport/passport.js')(passport,models.user);

//Sync Database
// var sequelize = require("./db/connection.js")
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Temp route to test on port 3001 - HEY LOOK A CAT!
app.get("/catdog", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/catdog.html"));
});

// Send every request to the React app
// Define any API routes before this runs
app.use(IGDB)
app.use(bookAPI)
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
