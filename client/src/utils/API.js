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
                return axios.get("/api/music/"+ text)
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
    //////////////////////////////////
    // CAN I DO THIS???
    //////////////////////////////////
    destroyFollow:(followedId)=>{
        let UNfollowObj={
            UNfollowed:followedId
        }
        return axios.delete("api/destroyFollow",UNfollowObj)
    },
    setHook:(hookedId,title,mediaPlot,mediaPic)=>{
            let hookObj={
                hookedId:hookedId,
                title:title,
                mediaPlot:mediaPlot,
                mediaPic:mediaPic
            }
            console.log(hookObj)
        return axios.post("/api/addHook",hookObj)
    },
    displayHooks:()=>{
        return axios.get("/api/allHooks/")
    },
    newPost:(title,body)=>{
        let postObj={
            title:title,
            body:body
        }
        return axios.post("/api/addPost",postObj)
    },
    getPosts:()=>{
        return axios.get("/api/allPosts/")
    },
    signOut:()=>{
        return axios.get('/logout')
    },
    newPassword:(email)=>{
        let emailObj={
            email:email
        }
        return axios.post("/api/forgot",emailObj)
    },
    resetPassword:(token,password)=>{
        console.log("reset api call ran!")
        let passwordObj={
            token:token,
            password:password
        }
        return axios.put("/api/reset/",passwordObj)
    }
}