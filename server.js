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

//Models
var models = require("./db/models");

////////////////////////////////////////////////////////////////////////////
// START PASSPORT
// The order of the passport server lines is important - no step on snek 
////////////////////////////////////////////////////////////////////////////

app.use(session({ secret: 'shepsvacationphotos2357',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes for authroization 
var authRoute = require('./routes/auth.js')(app,passport);

// console.log("\n\n\n\nmodels:", (models.User? "User model exists":"User dont exist"))
//load passport strategies
require('./config/passport/passport.js')(passport,models.User);


////////////////
// END PASSPORT
////////////////




const IGDB=require("./routes/APIs/IGDB.js")
const bookAPI=require("./routes/APIs/bookAPI.js")
const TMDB=require("./routes/APIs/themoviedb.js")
const TVDB=require("./routes/APIs/TVDB.js")

// Routes (but not auth.js and not isLogIn.js)
require("./routes/followRoutes.js")(app);
require("./routes/movieRoutes.js")(app);
require("./routes/hookRoutes.js")(app);
require("./routes/musicRoutes.js")(app);
require("./routes/routeTestsDB.js")(app);
require("./routes/userRoutes.js")(app);

require("./routes/videoGameRoutes.js")(app);
require("./routes/hookRoutes.js")(app);

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
app.use(TMDB)
app.use(TVDB)
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
