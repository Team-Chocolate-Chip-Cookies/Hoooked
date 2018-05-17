var express = require("express");
var app = express();
var authRoute = require('../auth.js')

console.log('post Api Ran')

//VALIDATION FUNCTION
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        console.log("Authenticated")
        return next();
    }
    else
    console.log("Forbidden!")
    res.status(403).send(err);
    // res.redirect('/signin');
}

app.get("/api/post/getAll", isLoggedIn, function (req, res) {
    //DOES MARK HAVE THIS MADE???
})


module.exports = app;