// /routes/forgot.js
// Mark made this: https://i.imgur.com/InCKKv3.gifv
// User process:
// 1. User hits /api/forgot/ and provides their email.
// 2. User recieves an email with a URL that is a random "token" + the website URL.
// 3. User follows email link and then submits their new password.
// Note, the token will expire in 1 hour.


var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var bCrypt = require('bcrypt-nodejs');
var db = require("../db/models");


// The nodeMailer function is for emailing the user their token
function nodeMailer(user, token) {
    // console.log("forgotRoutes.js, I'm in NODEMAILER!")
    // console.log("forgotRouts.js, token is ", token)
    // console.log("forgotroutes.js, user is ", user.email)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Hoookmallnow@gmail.com',
            pass: 'Cy0s3Ug3R7S9KGrmK91o'
        }
    });
    var mailOptions = {
        to: user.email,
        from: 'Hoookmallnow@gmail.com',
        subject: 'Hoook.me Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, and use the provided token to reset your password:\n\n' +
            'Link: http://www.hoook.me/newpassword/ \n' +
            'Token: ' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        console.log("forgotRoutes.js, nodeMailer sent a password recovery email!")
        if (err)
            console.log(err)
        else
            console.log(info);
        
    });
}



function nodeMailerConfirm(user, done) {
    console.log('forgotRoutes.js, user is ', user.email)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Hoookmallnow@gmail.com',
            pass: 'Cy0s3Ug3R7S9KGrmK91o'
        }
    });
    var mailOptions = {
        to: user.email,
        from: 'Hoookmallnow@gmail.com',
        subject: 'Your password has been changed for Hoook.me!',
        text: 'Hello,\n\n' +
            'This is a confirmation that the password for your account ' + user.email + ' on http://hoook.me has just been changed.\n\n' +
            'Log in and enjoy your new password!\n\n' +
            '-The Hoook.me Team'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        console.log("forgotRoutes.js, nodeMailer sent a password recovery CONFIRMATION email!")
        if (err)
            console.log(err)
        else
            console.log(info);
        
    });
}

module.exports = function (app) {
    // Forgot route that creates a token for the given email and sets an expiration, both are in the user model / user table
    app.post('/api/forgot', function (req, res, next) {
        console.log("forgotRoutes.js, /api/forgot route hit!")
        async.waterfall([
            function (done) {
                crypto.randomBytes(20, function (err, buf) {
                    var token = buf.toString('hex');
                    done(err, token);
                });
            },
            function (token, done) {
                db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                }).then(function (user) {
                    // console.log("forgotRoutes.js found user", user)
                    if (!user) {
                        console.log("forgotRoutes.js, Did not find a user");
                        // req.flash('error', 'No account with that email address exists.');
                    } else {
                        // console.log("forgotRoutes.js, looking for user ", req.body.email)
                        db.User.update(
                            {
                                resetPasswordToken: token,
                                resetPasswordExpires: Date.now() + 3600000
                            },
                            { where: { email: req.body.email } }
                        )
                            .then(function () {
                                // console.log("forgotRoutes.js, check user and token before done", user.email, token)
                                nodeMailer(user, token);
                                done();
                            })
                    }
                })
            },

        ], function (err) {
            if (err) return next(err);
            res.redirect('/forgot');
        });
    });

    // app.get('/pwdreset/', function(req, res)  {  // form for reset that ends up sending 
    //     res.redirect('/catdog');
    // });

    // Actual reset action takes place here, check for matchign token and allow a new password if it matches and isn't expired
    app.put('/api/reset/', function (req, res) {
        // geenrateHash is the function used to hash the user password before it hits the DB
        var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        console.log("forgotRoutes.js, /api/reset/ route hit!")
        async.waterfall([
            function (done) {
                // console.log("forgotRoutes.js, req stuff ", typeof req.params.token)
                db.User.findOne({
                    where: {
                        resetPasswordToken: req.body.token,
                        resetPasswordExpires: { $gt: Date.now() }
                    }
                }).then(function (user, err) {
                    // console.log("forgotRoutes.js, user is ", user)
                    // console.log("forgotRoutes.js , error is ", err)
                    if (!user) {
                        console.log('forgotRoutes.js, A user provided a password reset token that is invalid or has expired.');
                        return res.redirect('back');
                    } else {
                        // console.log("forgotRoutes.js, Inside else, user is ", user)
                        // console.log("forgotRoutes.js, user.email ", user.email)
                        // console.log("forgotRoutes.js, req.body.password", req.body.password)

                        var userPassword = generateHash(req.body.password);
                        db.User.update(
                            {
                                password: userPassword,
                                resetPasswordToken: null,
                                resetPasswordExpires: null
                            },
                            { where: { email: user.email } }
                        ).then(function () {
                            console.log('forgotRoutes.js, Last then sees user as ', user.email)
                            nodeMailerConfirm(user)
                            done();
                        })
                    }
                }
                );
            },

        ], function (err) {
            res.redirect('http://hoook.me'); // or heroku link or whatevwer
        });
    });
}