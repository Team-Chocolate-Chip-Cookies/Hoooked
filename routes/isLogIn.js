var authController = require('../controllers/authcontroller.js');
var authController = require('./auth.js');

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.

function isLoggedIn(req, res, next) {
    console.log("isLoggedIn called")
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}

module.exports = isLoggedIn;

