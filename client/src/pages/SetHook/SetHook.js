import React, { Component } from "react";
import "./SetHook.css";
// import ScrollbarContainer from "../components/ScrollbarContainer"
// import ScrollbarContainer from "../../components/ScrollbarContainer"
import ApiDataTV from "../../components/ApiDataTV"
import ApiDataMovie from "../../components/ApiDataMovie"
import ApiDataGame from "../../components/ApiDataGame"
import ApiDataBook from "../../components/ApiDataBook"
import ApiDataMusic from "../../components/ApiDataMusic"
import SearchBar from "../../components/SearchBar"
import { Col, Row, Container } from "../../components/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../utils/API";
import ChangeMediaPulldown from "../../components/ChangeMediaPulldown";
import Button from "../../components/Button";
import Button2 from "../../components/Button2";

import FriendSearchCard from "../../components/FriendSearchCard";
import FollowedData from "../../components/FollowedData"
import { withRouter } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SearchForm from  "../../components/SetHookApiSearchForm";
// import searchResultsList from "../../components/setHookApiSearchForm/searchResultsList";



class SetHook extends Component {
  state = {
    test: [
      {
        title: "hello",
        description: "Hola"
      },
      {
        title: "Yo",
        description: "Mocha"
      }
    ],
    search: "",
    bookData: [],
    gameData: [],
    movieData: [],
    musicData: [],
    TVData: [],

    followedArr:[],
   
    followerOpenSection:null,

    bookOpenSection: null,
    gameOpenSection: null,
    movieOpenSection: null,
    tvOpenSection: null,
    musicOpenSection: null,
   
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change

    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.clickSearch()
    }
  }
  componentDidMount() {
    API.allFollowUser()
    .then((res)=>{
      console.log("allFollowUser then function ran in componentDidMount")
      console.log(res)
      console.log(res.data)
      // const data=Object.assign({}, res.data)
      // data.followed=Object.assign({},res.data.followed)
      const data=res.data.map(item=>item)
      
      this.setState({
        followedArr:data
      })
      console.log(this.state.followedArr)
      console.log(this.state.followedArr[0].followed.id)
    })
    .catch((error) => {
      if (error && error.response.status == 403) {
          this.props.history.push("/")

      }
      else console.log(error)
  })
  }


//control state of api className on click
  clickClassName=(stateKey,id)=> {
  console.log("clickClassName ran!")
  console.log(stateKey)
  console.log(id)
  this.setState({
    [stateKey]: id
  });
}
//Post the Hook
  clickSetHook=()=>{
    console.log("set hook ran!")
    let hookedId=this.state.followedArr[this.state.followerOpenSection].followed.id
    let path = this.props.location.pathname
    switch (path) {
      case "/sethook/tv":
      let TVData=this.state.TVData[this.state.tvOpenSection]
      let TVTitle=TVData.name
      let TVPlot=TVData.overview
      let TVPic=TVData.image
    console.log(hookedId)
    console.log(TVTitle)
    console.log(TVPic)
    API.setHook(hookedId,TVTitle,TVPlot,TVPic)
    .then((res)=>{
      
    })
    .catch((error) => {
      if (error.response.status == 403) {
          this.props.history.push("/")

      }
      else console.log(error)
  })
      break;
      case "/sethook/movie":
      let movieData=this.state.movieData[this.state.movieOpenSection]
        let movieTitle=movieData.title
        let moviePlot=movieData.overview
        let moviePic=movieData.image
      console.log(hookedId)
      console.log(movieTitle)
      console.log(moviePic)
      API.setHook(hookedId,movieTitle,moviePlot,moviePic)
      .then((res)=>{
        
      })
      .catch((error) => {
        if (error.response.status == 403) {
            this.props.history.push("/")
  
        }
        else console.log(error)
    })
      break;
      case "/sethook/book":
      
   
      let bookData=this.state.bookData[this.state.bookOpenSection]
        let bookTitle=bookData.title
        let bookPlot=bookData.description
        let bookPic=bookData.image
      console.log(hookedId)
      console.log(bookTitle)
      console.log(bookPlot)
      console.log(bookPic)
      API.setHook(hookedId,bookTitle,bookPlot,bookPic)
      .then((res)=>{
        
      })
      .catch((error) => {
        if (error.response.status == 403) {
            this.props.history.push("/")
  
        }
        else console.log(error)
    })
      break;
      case "/sethook/game":
  
      let gameData=this.state.gameData[this.state.gameOpenSection]
        let gameTitle=gameData.name
        let gamePlot="No description"
        let gamePic=gameData.cover
      console.log(hookedId)
      console.log(gameTitle)
      console.log(gamePic)
      API.setHook(hookedId,gameTitle,gamePlot,gamePic)
      .then((res)=>{
        
      })
      .catch((error) => {
        if (error.response.status == 403) {
            this.props.history.push("/")
  
        }
        else console.log(error)
    })
      break;
      case "/sethook/music":
      let musicData=this.state.musicData[this.state.musicOpenSection]
      let musicTitle=musicData.tracks
      let musicPlot="No description"
      let musicPic=musicData.image
    console.log(hookedId)
    console.log(musicTitle)
    console.log(musicPic)
    API.setHook(hookedId,musicTitle,musicPlot,musicPic)
    .then((res)=>{
      
    })
    .catch((error) => {
      if (error.response.status == 403) {
          this.props.history.push("/")

      }
      else console.log(error)
  })
      break;
      default:
      console.log("You really shouldn't see me")
      break;
  }
}
  //This function sends an api call to the server to request data from foreign apis
  clickSearch = event => {

    console.log(this.state.search)
    let path = this.props.location.pathname
    API.foreign(this.state.search, path)
      .then((res,error) => {
        console.log(res)
        this.setState({
          search:""
        })
        switch (path) {
          case "/sethook/tv":
          let TVElementArray=[]
          res.data.forEach((TVElement)=> {
            let currentTVElement={
              name:TVElement.name,
              overview:TVElement.overview,
              popularity:TVElement.popularity,
              image:TVElement.poster_path
            }
            TVElementArray.push(currentTVElement)
          })
          console.log(TVElementArray)
          this.setState({
            TVData:TVElementArray
          },function(){
            console.log(this.state.TVData)
          })
            break;
          case "/sethook/movie":
          let movieElementArray=[]
            res.data.forEach((movieElement)=> {
              let currentMovieElement={
                title:movieElement.title,
                overview:movieElement.overview,
                popularity:movieElement.popularity,
                release_date:movieElement.release_date,
                image:movieElement.poster_path
              }
              movieElementArray.push(currentMovieElement)
            })
            console.log(movieElementArray)
            this.setState({
              movieData:movieElementArray
            },function(){
              console.log(this.state.movieData)
            })
            break;
            
          case "/sethook/game":
          let gameElementArray=[]
            res.data.forEach((gameElement)=>{
              let currentGameElement={
                name:gameElement.name,
                cover:gameElement.cover.url,
                rating:gameElement.rating
              }
              gameElementArray.push(currentGameElement)
            })
            console.log(gameElementArray)
            this.setState({
              gameData:gameElementArray
            },function(){
              console.log(this.state.gameData[0].cover.url)
            });
          
            break;
          case "/sethook/book":
            let elementArray = []
            res.data.forEach((element) => {
              let currentElement = {
                title: element.title,
                authors: element.authors,
                description: element.description,
                image: element.thumbnail,
                link: element.link,
                publishedDate: element.publishedDate
              }
              elementArray.push(currentElement)
            })
            console.log(elementArray)
            this.setState({
              bookData: elementArray,
            });
            break;
          case "/sethook/music":
          let musicArray=[]
          res.data.tracks.items.forEach((mElement)=>{
            let musicElement={
              artists:mElement.artists[0].name,
              tracks:mElement.name,
              link:mElement.external_urls.spotify,
              album:mElement.album.name,
              image:mElement.album.images[2].url,
              
            }
            musicArray.push(musicElement)
          })
          console.log(musicArray)
          this.setState({
            musicData:musicArray
          });
            break;
          default:
            console.log("ERROR IN API RETURN SWITCH CASE")
            
        }
      })
      .catch((error)=>{
        if (error.response.status==403) {
             this.props.history.push("/")
      
        }

        else console.log(error)

      })
  }
  render() {
    return (
      <div>

        <Container>
        <NavBar/>
        <br></br>
       

          
          {/* <Row>
            <Col size="md-12">
            <div className="text-center">
              <ChangeMediaPulldown className="text-center"/> 
              </div>
            </Col>
          </Row> */}
          <br></br>


          <Switch>
            {/* TV search path */}
            <Route exact path="/sethook/tv">
              {/* <div> */}
              <Row>
                <Col size="md-6">
                  <div className="card scrolling">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        clickSearch={this.clickSearch}
                        placeholder="TV Show Title"
                        search={this.state.search}
                        onKeyPress={this._handleKeyPress}
                    />

                      {this.state.TVData.map((data, index) => (

                    <ApiDataTV
                      name={data.name}
                      // id={image.id}
                      
                      key={index}
                      overview={data.overview}
                      popularity={data.popularity}
                      image={data.image}
                      id={index}
                      clickClassName={this.clickClassName}
                      open={this.state.tvOpenSection===index} 
                      stateKey="tvOpenSection"
                    // image={data.image}
                    />
                  ))}

                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>

                    {this.state.followedArr.map((data, index) => {

                      
                      if (data.followed==null){
                        throw "This follower is null"
                      }
                      return(
                      
                    <FollowedData
                      name={data.followed.firstname+" "+data.followed.lastname} 
                      // name={data.followed.}     
                      // name={data.followed.id}  
                      // name={data.UserId}  
                      key={index}
                      id={data.followed.id}
                      index={index}
clickClassName={this.clickClassName}
open={this.state.followerOpenSection===index} 
stateKey="followerOpenSection"
                    />
                  )})}
                  </div>      
                </Col>
              </Row>
              {/* </div> */}
            </Route>

            {/* Movie search path */}
            <Route exact path="/sethook/movie">

              {/* <div> */}
              <Row>
                <Col size="md-6">
                  <div className="card scrolling">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        clickSearch={this.clickSearch}
                        placeholder="Movie Title"
                        search={this.state.search}
                        onKeyPress={this._handleKeyPress}
                    />

                      {this.state.movieData.map((data, index) => (
                    

                    <ApiDataMovie
                      title={data.title}
                      // id={image.id}
                      key={index}
                      overview={data.overview}
                      popularity={data.popularity}
                      release_date={data.release_date}
                      image={data.image}
                      id={index}
                      clickClassName={this.clickClassName}
                      open={this.state.movieOpenSection===index} 
                      stateKey="movieOpenSection"
                    // image={data.image}
                    />
                  ))}
           
                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
                    {this.state.followedArr.map((data, index) => {


if (data.followed==null){
  throw "This follower is null"
}
return(

<FollowedData
name={data.followed.firstname+" "+data.followed.lastname} 
// name={data.followed.}     
// name={data.followed.id}  
// name={data.UserId}  
key={index}
id={data.followed.id}
index={index}
clickClassName={this.clickClassName}
open={this.state.followerOpenSection===index} 
stateKey="followerOpenSection"
/>
)})}
                  </div>    
                </Col>
              </Row>
              {/* </div> */}
            </Route>

            {/* game search path */}
            <Route exact path="/sethook/game">
              {/* <div> */}
              <Row>
                <Col size="md-6">
                  <div className="card scrolling">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        clickSearch={this.clickSearch}
                        placeholder="Game Title"
                        search={this.state.search}
                        onKeyPress={this._handleKeyPress}
                    />

                  {this.state.gameData.map((data, index) => (

                    <ApiDataGame
                      name={data.name}
                      // id={image.id}
                      // synopsis={data.synopsis}
                      rating={data.rating}
                      cover={data.cover}
                      key={index}
                      description={data.description}
                      id={index}
                      clickClassName={this.clickClassName}
                      open={this.state.gameOpenSection===index} 
                      stateKey="gameOpenSection"
                    />
                  ))}
            
            </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
                    {this.state.followedArr.map((data, index) => {


if (data.followed==null){
  throw "This follower is null"
}
return(

<FollowedData
name={data.followed.firstname+" "+data.followed.lastname} 
// name={data.followed.}     
// name={data.followed.id}  
// name={data.UserId}  
key={index}
id={data.followed.id}
index={index}
clickClassName={this.clickClassName}
open={this.state.followerOpenSection===index} 
stateKey="followerOpenSection"
/>
)})}
                  </div>       
                </Col>
              </Row>

              {/* </div> */}
            </Route>



            {/* book search path */}
            <Route exact path="/sethook/book">
              {/* <div> */}
              <Row>
                <Col size="md-6">
                  <div className="card scrolling">
                  
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        clickSearch={this.clickSearch}
                        placeholder="Book Title"
                        search={this.state.search}
                        onKeyPress={this._handleKeyPress}
                    />

                      {this.state.bookData.map((data, index) => (
                        
                    <ApiDataBook
                        title={data.title}
                        // id={image.id}
                        key={index}
                        description={data.description}
                        image={data.image}
                        link={data.link}
                        authors={data.authors}
                        publishedDate={data.publishedDate}
                        id={index}
                        clickClassName={this.clickClassName}
                        open={this.state.bookOpenSection===index} 
                        stateKey="bookOpenSection"
                    />
                  ))}
            
                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
                    {this.state.followedArr.map((data, index) => {


if (data.followed==null){
  throw "This follower is null"
}
return(

<FollowedData
name={data.followed.firstname+" "+data.followed.lastname} 
// name={data.followed.}     
// name={data.followed.id}  
// name={data.UserId}  
key={index}
id={data.followed.id}
index={index}
clickClassName={this.clickClassName}
open={this.state.followerOpenSection===index} 
stateKey="followerOpenSection"
/>
)})}
                  </div>         
                </Col>
              </Row>

              {/* </div> */}
            </Route>
            {/* music search path */}
            <Route exact path="/sethook/music">
              {/* <div> */}
              <Row>
                <Col size="md-6">
                  <div className="card scrolling">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        clickSearch={this.clickSearch}
                        placeholder="Song Title"
                        search={this.state.search}
                        onKeyPress={this._handleKeyPress}
                    />

                  {this.state.musicData.map((data, index) => (
                    
                    <ApiDataMusic
                      tracks={data.tracks}
                      artists={data.artists}
                      link={data.link}
                      album={data.album}
                      image={data.image}
                      //artists tracks link album image
                      key={index}
                    id={index}
                    clickClassName={this.clickClassName}
                    open={this.state.musicOpenSection===index} 
                    stateKey="musicOpenSection"
                    />
                  ))}
            
            </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
                    {this.state.followedArr.map((data, index) => {


if (data.followed==null){
  throw "This follower is null"
}
return(

<FollowedData
name={data.followed.firstname+" "+data.followed.lastname} 
// name={data.followed.}     
// name={data.followed.id}  
// name={data.UserId}  
key={index}
id={data.followed.id}
index={index}
clickClassName={this.clickClassName}
open={this.state.followerOpenSection===index} 
stateKey="followerOpenSection"
/>
)})}

                  </div>     
                </Col>
              </Row>

              {/* </div> */}
            </Route>
          </Switch>
          
          <br></br>
        
          <Row>
            <Col size="md-12" className = "text-center">
              <Button2 onClick={() => this.clickSetHook()}
              >
                SET HOOK
              </Button2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default withRouter(SetHook);