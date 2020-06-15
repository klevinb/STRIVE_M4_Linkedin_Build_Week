import React, { Component } from 'react';
import { Nav, Image, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import './NavBar.css';
import { FaSearch, FaHome, FaSuitcase, FaUserFriends, FaVideo } from 'react-icons/fa';
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

              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />

              </Form>

            </div>


            <div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto" className='text-white'>
                  <Link className='text-white mr-2' to="/" exact >
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

                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" title='Me'>
                    <NavDropdown.Item >My</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    <NavDropdown.Item >Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" title='Work'>
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Item >Another action</NavDropdown.Item>
                    <NavDropdown.Item >Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >Separated link</NavDropdown.Item>
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
      </Container>

    )
  }
}

export default NavBar;