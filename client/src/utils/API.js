import axios from "axios";


export default {
    foreign: function (text, path) {
        console.log("path: " + path)
        const dataObj = { text: text }
        console.log(dataObj)
        switch (path) {
            case "/sethook/tv":
                return axios.get("/api/tv", dataObj)
                
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
                return axios.get("/api/music", dataObj)
                break;
            default:
                console.log("ERROR IN API FOREIGN")
        }
        // return axios.get("/api/",dataObj); 
    },
    signIn:function(email,password){
      let  signUpObj={
            email:email,
            password:password
        }
        return axios.post("/signin",signUpObj)
    }

}