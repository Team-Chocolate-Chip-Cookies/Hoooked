var books = require('google-books-search');

const APIkey="AIzaSyC-irQvnqjszF08Bex980XklUgBakhoXU8"

var options = {
    key: APIkey,
    // field: 'title', //title, author, etc
    offset: 0,
    limit: 5,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

books.search("Harry Potter", options, function(error, results, apiResponse) {
    if ( ! error ) {
        console.log(results);
        console.log(results[0].images)
    } else {
        console.log(error);
    }
});