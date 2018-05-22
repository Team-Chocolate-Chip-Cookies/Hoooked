var authController = require('../controllers/authcontroller.js');
var authController = require('./auth.js');

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.

function isLoggedIn(req, res, next) {
    console.log("isLogIn.js - isLoggedIn called")
    if (req.isAuthenticated()) {
        console.log("isLogIn.js - Authenticated: ", req.user.id)
        // res.send("isLogIn.js - Successful Authentication!")
        return next();
    } else {
        console.log("isLogIn.js, Authentication Failed!")
        res.status(403).send("Not signed in.  <a href='http://www.hoook.me/'>Please Sign In</a>");;
    }
}

module.exports = isLoggedIn;

