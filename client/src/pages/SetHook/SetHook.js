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
import ChangeMediaPulldown from "../../components/ChangeMediaPulldown";
import Button from "../../components/Button";
import FriendSearchCard from "../../components/FriendSearchCard";

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
    gameData: []
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
              bookData: elementArray
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



          <Switch>
            {/* TV search path */}
            <Route exact path="/sethook/tv">
              <div>
                <ScrollbarContainer>
                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
                  />
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
                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
                  />
                  {this.state.test.map((data, index) => (
                    <ApiDataMovie
                      title={data.name}
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

                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
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
                </ScrollbarContainer >
                <ScrollbarContainer />
              </div>
            </Route>
            {/* book search path */}
            <Route exact path="/sethook/book">
              <div>
              <Row>
            <Col size="xs-6">
                <ScrollbarContainer>
                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
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
                    // image={data.image}
                    />
                  ))}
                </ScrollbarContainer >
                
</Col>
<Col size="xs-6">
                <ScrollbarContainer>
                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
                  />

                  <FriendSearchCard/>


                </ScrollbarContainer >

</Col>
</Row>

              </div>
            </Route>
            {/* music search path */}
            <Route exact path="/sethook/music">
              <div>
                <ScrollbarContainer>
                  <SearchBar
                    handleInputChange={this.handleInputChange}
                    clickSearch={this.clickSearch}
                  />
                  {this.state.test.map((data, index) => (
                    <ApiDataMusic
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
          </Switch>
          

        
          <Row>
            <Col size="xs-12">
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