var express = require("express");
var app = express();
var books = require('google-books-search');
var authRoute = require('../auth.js')


console.log("book API file ran!!!")
const APIkey="AIzaSyC-irQvnqjszF08Bex980XklUgBakhoXU8"

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

app.get("/api/book/:search",  isLoggedIn, function (req, res) {

    console.log("BOOK ROUTE RAN")
    console.log(req.params.search)
    let searchText=req.params.search;
    var options = {
        key: APIkey,
        // field: 'title', //title, author, etc
        offset: 0,
        limit: 10,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };
    
    books.search(searchText, options, function(error, results, apiResponse) {
        if ( ! error ) {
            // console.log(results);
            // console.log(results[0].images)
            res.json(results);
        } else {
            console.log(error);
            res.json(error)
        }
    });
})



module.exports = app;
// export default app;