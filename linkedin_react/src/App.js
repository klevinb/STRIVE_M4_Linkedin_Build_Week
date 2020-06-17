import React, { Component } from 'react';
import Content from './components/Content'
import { Container, Dropdown } from 'react-bootstrap'
import NavBar from './components/NavBar';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  state = {
    userImg: '',
    users: '',
    search: '',
    show: false
  }

  fetchUser = async () => {
    await fetch("https://striveschool.herokuapp.com/api/profile/", {
      headers: new Headers({
        'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
        "Content-Type": "application/json",
      }),
    })
      .then(resp => resp.json())
      .then(respObj => this.setState({
        users: respObj
      }))
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  searchedValue = (search) => {
    if (search) {
      this.setState({
        search,
        show: true
      });
    } else {
      this.setState({
        search: '',
        show: false
      });
    }
  }

  changeStatus = () => {
    this.setState({
      show: !this.state.show,
      search: ''
    });
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
            <NavBar
              search={this.searchedValue}
              searchedValue={this.state.searchedValue}
              status={this.state.show}
              changeStatus={this.changeStatus}
              users=
              {this.state.users && this.state.search &&

                this.state.users
                  .filter(user => user.name
                    .toLowerCase()
                    .startsWith(this.state.search.toLowerCase())).length > 0 ?

                this.state.users
                  .filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
                  .map((user, i) =>
                    <Dropdown.Item key={i}><Link to={"/" + user.username}>{user.name}</Link></Dropdown.Item>
                  )

                :
                <Dropdown.Item>No user with that name</Dropdown.Item>


              } src={this.state.userImg}
            />
            <Route path="/profiles/:userID" render={(props) => <Content {...props} getUserImg={this.getUserImg} />} />
            <Footer />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
