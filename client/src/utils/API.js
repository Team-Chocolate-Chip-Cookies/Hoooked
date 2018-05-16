import axios from "axios";


export default {
    foreign: function (text, path) {
        console.log("path: " + path)
        const dataObj = { text: text }
        console.log(dataObj)
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
                return axios.get("/api/music", dataObj)
                break;
            default:
                console.log("ERROR IN API FOREIGN")
        }
        // return axios.get("/api/",dataObj); 
    },
    signIn:function(email,password){
      let  signInObj={
            email:email,
            password:password
        }
        return axios.post("/signin",signInObj)
    },
    signUp:function(firstName,lastName,email,password){
        let  signUpObj={
            firstname:firstName,
            lastname:lastName,
            email:email,
            password:password
        }
        return axios.post("/signup",signUpObj)

    },
    allUsers:()=>{
        return axios.get("api/users")
    },
    addFollow:(followedId)=>{
        let followObj={
            followed:followedId
        }
        return axios.post("api/addFollow",followObj)
    },
    allFollowUser:()=>{
        return axios.get("/api/allFollowUser/")
    },


}