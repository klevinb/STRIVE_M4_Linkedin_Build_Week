import React, { Component } from 'react';
import Content from './components/Content'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar';
import Footer from "./components/Footer"

class App extends Component {

  state = {
    profiles: null,

  }
  componentDidMount = async () => {
    await fetch("https://striveschool.herokuapp.com/api/profile/", {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa("user16:c9WEUxMS294hN6fF"),
        "Content-Type": "application/json",
      }),
    })
      .then(response => response.json())
      .then(respObj => this.setState({
        profiles: respObj
      }))
  }

  render() {
    return (
      <div className="App" >
        <Container className="m-0 p-0" fluid>
          <NavBar />
          {console.log(this.state.profiles)}
          {this.state.profiles && this.state.profiles.filter(profile => profile.name === "Klevin").map(profile => <Content key={profile._id} profileInfo={profile} />)}

        </Container>
      </div>
    );
  }
}

export default App;
