var authController = require('../controllers/authcontroller.js');
var authController = require('./auth.js');

function isLoggedIn(req, res, next) {
    console.log("isLoggedIn called")
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}

module.exports = isLoggedIn;

