var authController = require('../controllers/authcontroller.js');

module.exports = function (app,passport) {
    console.log("auth.js loaded")
    
    app.get('/signup', authController.signup);
    

    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/catdog',
        failureRedirect: '/signup'
    }
    ));


    app.get('/dashboard', isLoggedIn, function(req,res){
        res.send()
    });


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ),function(req,res){
        res.send()
    });


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}
