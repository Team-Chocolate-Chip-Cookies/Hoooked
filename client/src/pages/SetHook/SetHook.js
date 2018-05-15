import React, { Component } from "react";
import "./SetHook.css";
// import ScrollbarContainer from "../components/ScrollbarContainer"
import ScrollbarContainer from "../../components/ScrollbarContainer"
import ApiDataTV from "../../components/ApiDataTV"
import ApiDataMovie from "../../components/ApiDataMovie"
import ApiDataGame from "../../components/ApiDataGame"
import ApiDataBook from "../../components/ApiDataBook"
import ApiDataMusic from "../../components/ApiDataMusic"
import SearchBar from "../../components/SearchBar"
import { Col, Row, Container } from "../../components/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../utils/API";

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
    musicData: []
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
    let path=this.props.location.pathname
    API.foreign(this.state.search, path)
      .then(res => {
        console.log(res)
        switch (path) {
          case "/sethook/tv":
            break;
          case "/sethook/movie":
            break;
          case "/sethook/game":
            break;
          case "/sethook/book":
        
          let elementArray=[]
            res.data.forEach((element)=>{
              let currentElement={
                title:element.title,
                authors:element.authors,
                description:element.description,
                image:element.thumbnail,
                link:element.link,
                publishedDate:element.publishedDate
              }
              elementArray.push(currentElement)
            })
            console.log(elementArray)
            this.setState({
              bookData:elementArray
            });
            break;
          case "/sethook/music":
          let musicArray=[]
            res.data.tracks.items.forEach((mElement)=>{
              let musicElement={
                artists:mElement.artists.name,
                tracks:mElement.name,
                link:mElement.external_urls.spotify,
                album:mElement.album.name,
                image:mElement.album.images,
                
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

  }
  render() {
    return (
      <div>
        {/* <ScrollbarContainer/> */}
        <p>SetHook</p>
        <Container>
          <SearchBar
            handleInputChange={this.handleInputChange}
            clickSearch={this.clickSearch}
          />
          <Switch>
            {/* TV search path */}
            <Route exact path="/sethook/tv">
              <div>
                <ScrollbarContainer>
                  <p>I'm a tv child!</p>
                  {this.state.test.map((data, index) => (
                    <ApiDataTV
                      title={data.title}
                      // id={image.id}
                      key={index}
                      description={data.description}
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
            {/* Movie search path */}
            <Route exact path="/sethook/movie">
              <div>
                <ScrollbarContainer>
                  <p>I'm a movie child!</p>
                  {this.state.test.map((data, index) => (
                    <ApiDataMovie
                      title={data.title}
                      // id={image.id}
                      key={index}
                      description={data.description}
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
            {/* game search path */}
            <Route exact path="/sethook/game">
              <div>
                <ScrollbarContainer>
                  <p>I'm a game child!</p>
                  {this.state.test.map((data, index) => (
                    <ApiDataGame
                      title={data.title}
                      // id={image.id}
                      key={index}
                      description={data.description}
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
            {/* book search path */}
            <Route exact path="/sethook/book">
              <div>
                <ScrollbarContainer>
                  <p>I'm a book child!</p>
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
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
            {/* music search path */}
            <Route exact path="/sethook/music">
              <div>
                <ScrollbarContainer>
                  <p>I'm a music child!</p>
                  {this.state.musicData.map((data, index) => (
                    <ApiDataMusic
                      tracks={data.tracks}
                      artists={data.artists}
                      link={data.link}
                      album={data.album}
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
          </Switch>
        </Container>
      </div>
    );
  }
}


export default SetHook;