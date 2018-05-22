// Q: How do Trees get on the internet?
// A: They Login.



var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
    console.log("auth.js loaded")

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        // successRedirect: '/catdog',
        // failureRedirect: '/signup'
    }
    ));


    app.get('/dashboard', isLoggedIn, function (req, res) {
        res.send()
    });


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        // successRedirect: '/dashboard',
        // failureRedirect: '/signin'
    }
    ), function (req, res) {
        res.send()
    });


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated()) {
            // res.status(418).send("auth.js - Sucessful Login!")
            console.log("auth.js - Authenticated: ", req.user.id)
            return next();
        }
        else {
            console.log("auth.js - Authentication Failed!")
            res.status(403).send("Not signed in.  <a href='http://www.hoook.me/'>Please Sign In</a>");
        }
    }
}

