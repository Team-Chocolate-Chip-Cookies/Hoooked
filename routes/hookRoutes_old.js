// This file was incomplete and renamed from hookRoutes in favor of a better fil
// Mark

// //routes for setting and rendering hooks

// var db = require("../db/models");

// // isLoggedIn is a function that checks if the user is logged in.
// // isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// // isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
// var isLoggedIn = require('./isLogIn.js') 
// var auth=require("./auth.js")

// module.exports = function (app) {

//     app.post("/api/addHook", function (req, res) {
//     //     db.Hook.create({
//     //         UserId:req.user.id,
//     //         followedId:req.body.followed,
//     //         // followed: req.body.followed,
            
//     //         // followerID: req.body.followerID
//     //     })
//     //         .then(function (dbPost) {
//     //             console.log(dbPost)
//     //             res.json(dbPost);
//     //         }) 
//     //         .catch((err)=>{
//     //             console.log(err)
//     //             res.status(400).send(err)
//     //         })
       
//     });
// }