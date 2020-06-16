import React, { Component } from 'react';
import Content from './components/Content'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  state = {
    userImg: ''
  }

  getUserImg = (src) => {
    if (src) {
      this.setState({
        userImg: src
      });
    } else {
      this.setState({
        userImg: ''
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Container className="m-0 p-0" fluid>
            {this.state.userImg ?
              <NavBar src={this.state.userImg} />
              :
              <NavBar />
            }
            <Route path="/:userID" render={(props) => <Content {...props} getUserImg={this.getUserImg} />} />
            <Footer />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
