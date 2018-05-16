import axios from "axios";


export default {
    foreign: function (text, path) {
        console.log("path: " + path)
        switch (path) {
            case "/sethook/tv":
                return axios.get("/api/tv/"+text)
                break;
            case "/sethook/movie":
                return axios.get("/api/movie/"+text)
                break;
            case "/sethook/game":
                return axios.get("/api/game/"+text)
                break;
            case "/sethook/book":
                return axios.get("/api/book/"+text)
                break;
            case "/sethook/music":
            console.log("music")
                return axios.get("/api/music/"+text)
                break;
            default:
                console.log("ERROR IN API FOREIGN")
        }
        // return axios.get("/api/",dataObj); 
    },


}