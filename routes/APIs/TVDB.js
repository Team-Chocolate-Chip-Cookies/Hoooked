var request = require("request");
var express = require("express");
var app = express();
const apiKey="d82168dcb96785617205d58a62c78d32"

console.log("TV API RAN!")


// console.log(req.params.search)
//MOVIE QUERY EXAMPLE
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

//TV QUERY EXAMPLE
//https://api.themoviedb.org/3/search/tv?api_key=d82168dcb96785617205d58a62c78d32&language=en-US&query=firefly&page=1

//CONFIG QUERY



//IMAGE URL:GET THE BASEURL from config+FILE_SIZE(poster_size w500 for example) from config+final location from query url
app.get("/api/TV/:search", function (req, res) {
    let search=req.params.search
    // console.log(search)

let     configQueryUrl="https://api.themoviedb.org/3/configuration?api_key="+apiKey
let queryUrl="https://api.themoviedb.org/3/search/tv?api_key="+apiKey+"&query="+search+"&page=1"

request(configQueryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
       let bodyparsed=(JSON.parse(body))
       const base_url= bodyparsed.images.base_url;
        console.log(base_url)
        const size= bodyparsed.images.poster_sizes[2]
        console.log(size)
     
        request(queryUrl, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var parsedBody = JSON.parse(body)
                console.log(parsedBody)
    
                let results=parsedBody.results

                results.forEach(element=>{
                    let poster_path=element.poster_path
                    let imageUrl=base_url+size+poster_path
                    element.poster_path=imageUrl
                })
                console.log("RESULTS START")
                console.log(results)
                res.json(results)
            }
        })
    }
})
})
module.exports = app;
