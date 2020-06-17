import React, { Component } from 'react';
import { Nav, Image, Navbar, NavDropdown, Dropdown, FormControl, Container } from 'react-bootstrap';
import './NavBar.css';
import { FaHome, FaSuitcase, FaUserFriends, FaVideo } from 'react-icons/fa';
import { BsChatSquareDots } from 'react-icons/bs'
import { AiOutlineBell } from 'react-icons/ai'
import { Link } from 'react-router-dom'



class NavBar extends Component {
  render() {
    return (

      <Container className="m-0 p-0 pb-2" fluid>

        <Navbar bg="dark" expand="lg" className='navBar'>
          <div className='container'>
            <div className="d-flex">
              <Image src="/assets/logo.png" style={{ width: "70px" }} />
              <Navbar.Brand href="#home">

              </Navbar.Brand>
              <Dropdown show={this.props.status}>
                <Dropdown.Menu>
                  {this.props.users}
                </Dropdown.Menu>
              </Dropdown>
              <FormControl onChange={(event) => this.props.search(event.currentTarget.value)} type="text" placeholder="Search" className="mr-sm-2" />
            </div>


            <div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className='mr-auto text-white'>
                  <Link className='text-white mr-2' to="/" >
                    <FaHome />
                    Home
                  </Link>

                  <Link className='text-white mr-2' to="/my-network" >
                    <FaUserFriends />
                    My Network
                  </Link>
                  <Link className='text-white mr-2' to="/my-network" >
                    <FaSuitcase />
                    Jobs
                  </Link>
                  <Link className='text-white mr-2' to="/my-network" >
                    <BsChatSquareDots />
                    Messaging
                  </Link>
                  <Link className='text-white mr-2' to="/my-network" >
                    <AiOutlineBell />
                    Notifications
                  </Link>

                  {this.props.src ?
                    <Image src={this.props.src} style={{ width: "25px", height: "25px", borderRadius: "35%", margin: "0" }} />
                    :
                    <Image src='https://img.icons8.com/officel/2x/user.png' style={{ width: "25px", height: "25px", borderRadius: "35%", margin: "0" }} />
                  }
                  <NavDropdown title="Dropdown" className="basic-nav-dropdown" variant="light" title='Me'>
                    <Link className='nav-link' to="/me" >
                      My acc
                  </Link>
                  </NavDropdown>

                  <NavDropdown title="Dropdown" className="basic-nav-dropdown" title='Work'>
                    <NavDropdown.Item >Action</NavDropdown.Item>
                  </NavDropdown>

                  <Link className='text-white mr-2' to="/my-network" >
                    <FaVideo />
                    Learning
                  </Link>

                </Nav>

              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
      </Container >

    )
  }
}

export default NavBar;