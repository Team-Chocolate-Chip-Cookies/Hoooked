// /routes/forgot.js
//

var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var db = require("../db/models");

module.exports = function (app) {
    // Forgot route that creates a token for the given email and sets an expiration
    

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
                    console.log("forgotRoutes.js found user", user)
                    if (!user) {
                        console.log("forgotRoutes.js, Did not find a user");
                        req.flash('error', 'No account with that email address exists.');
                    } else {
                        console.log("forgotRoutes.js, looking for user ", req.body.email)
                       
                        db.User.update(
                            {
                                resetPasswordToken: token,
                                resetPasswordExpires: Date.now() + 3600000
                            },
                            { where: { email: req.body.email } }
                        )
                        
                        
                        
                        .then(function (user, token) {
                            console.log("forgotRoutes.js, check user and token before done", user.email, token)
                            var nodemailerEmail = user.email
                            done(nodemailerEmail, token);
                        })
                    }
                })



                // .then(function (user) {
                //     console.log("forgotRoutes.js, looking for user ", req.body.email)
                //     db.User.update(
                //         {
                //             resetPasswordToken: token,
                //             resetPasswordExpires: Date.now() + 3600000
                //         },
                //         { where: { email: req.body.email } }
                //     )
                // }).then(function (dbOutput) {
                //     console.log("forgotRoutes.js, .then")
                //     console.log(dbOutput);
                // }).catch(next)




                // , function (res, user) {

                // if (!user) {
                //     req.flash('error', 'No account with that email address exists.');
                //     return res.redirect('/forgot');
                // } else {
                //     console.log("forgotRoutes.js, else inside find one")
                // db.User.update({}) 

                // user.; // 1 hour






                //     , function (err, user) {
                //     if (!user) {
                //         req.flash('error', 'No account with that email address exists.');
                //         return res.redirect('/forgot');
                //     }

                //     user.resetPasswordToken = token;
                //     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                //     user.update(function (err) {
                //         done(err, token, user);
                //     });
                // });
            },
            function (user, token) {
                console.log("forgotRoutes.js, I'm in NODEMAILER!")
                console.log("forgotRouts.js, token is ", token)
                console.log("forgotroutes.js, user is ", nodemailerEmail)
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: '8lternateusername@gmail.com',
                        pass: 'a7632fc207'
                    }
                });
                var mailOptions = {
                    to: user.email,
                    from: '8lternateusername@gmail.com',
                    subject: 'Node.js Password Reset',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                    req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                });
            }
        ], function (err) {
            if (err) return next(err);
            res.redirect('/forgot');
        });
    });
    // Actual reset action takes place here, check for matchign token and allow a new password if it matches and isn't expired
    app.get('/reset/:token', function (req, res) {
        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
            if (!user) {
                req.flash('error', 'Password reset token is invalid or has expired.');
                return res.redirect('/forgot');
            }
            res.render('reset', {
                user: req.user
            });
        });
    });
}