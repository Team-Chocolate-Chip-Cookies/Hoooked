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
import FriendSearchCard from "../../components/FriendSearchCard";
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
    tvData: [],
    movieData: [],
    musicData: [],

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

  componentDidMount() {

  }
  componentWillReceiveProps() {


  }
  //This function sends an api call to the server to request data from foreign apis
  clickSearch = event => {

    console.log(this.state.search)
    let path = this.props.location.pathname
    API.foreign(this.state.search, path)
      .then(res => {
        console.log(res)
        switch (path) {
          case "/sethook/tv":
            break;
          case "/sethook/movie":
          let movieElementArray=[]
            res.data.forEach((movieElement)=> {
              let currentMovieElement={
                title:movieElement.title,
                overview:movieElement.overview,
                popularity:movieElement.popularity,
                release_date:movieElement.release_date
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
            break;
          default:
            console.log("ERROR IN API RETURN SWITCH CASE")
        }
      })

  }
  render() {
    return (
      <div>
<br></br>
        <Container>
          {/* change media button */}
          <Row>
            <Col size="md-12">
            <div className="text-center">
              <ChangeMediaPulldown className="text-center"/> 
              </div>
            </Col>
          </Row>
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
                    />

                      {this.state.tvData.map((data, index) => (

                    <ApiDataTV
                      title={data.title}
                      // id={image.id}
                      key={index}
                      description={data.description}
                    // image={data.image}
                    />
                  ))}

                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
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
                    />

                      {this.state.movieData.map((data, index) => (
                    

                    <ApiDataMovie
                      title={data.title}
                      // id={image.id}
                      key={index}
                      overview={data.overview}
                      popularity={data.popularity}
                      release_date={data.release_date}
                    // image={data.image}
                    />
                  ))}
           
                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
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
                    // image={data.image}
                    />
                  ))}
            
            </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
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
                    />
                  ))}
            
                  </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
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
                    />

                  {this.state.musicData.map((data, index) => (
                    
                    <ApiDataMusic
                      title={data.title}
                      // id={image.id}
                      key={index}
                      description={data.description}
                    // image={data.image}
                    />
                  ))}
            
            </div>
                </Col>

                <Col size="md-6">
                  <div className="card scrolling">
                    <FriendSearchCard/>
                  </div>     
                </Col>
              </Row>

              {/* </div> */}
            </Route>
          </Switch>
          
          <br></br>
        
          <Row>
            <Col size="md-12" className = "text-center">
              <Button>
                SET HOOK
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default SetHook;