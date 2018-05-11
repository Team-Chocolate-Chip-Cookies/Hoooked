var books = require('google-books-search');

const APIkey="AIzaSyC-irQvnqjszF08Bex980XklUgBakhoXU8"

var options = {
    key: APIkey,
    // field: 'title', //title, author, etc
    offset: 0,
    limit: 1,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

books.search("Harry Potter", options, function(error, results, apiResponse) {
    if ( ! error ) {
        console.log(results);
        console.log("Title: " +results[0].title)//console the require list
        console.log("Published Date: "+results[0].publishedDate)
        console.log("Description: "+ results[0].description)
        console.log("Average Rating: " +results[0].AverageRating)
        console.log("ID: " +results[0].id);
        console.log("Link: " +results[0].link);
        console.log("Thumbnail: " +results[0].thumbnail);

    } else {
        console.log(error);
    }
});