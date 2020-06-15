import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import './NavBar.css';
import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaVideo } from 'react-icons/fa';



class NavBar extends Component {
  render() {
    return (

      <Container className="m-0 p-0" fluid>

        <Navbar bg="dark" expand="lg" className='navBar'>
          <div className='container'>
            <div className="d-flex">
              <FaLinkedin className='linkedIn' />
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
                  <Nav.Link className='text-white' href="#home">
                    <FaHome />
                    Home</Nav.Link>
                  <Nav.Link className='text-white'>

                    My Network</Nav.Link>
                  <Nav.Link className='text-white'>
                    <FaSuitcase />
                    Jobs</Nav.Link>
                  <Nav.Link className='text-white'>

                    Messaging</Nav.Link>
                  <Nav.Link className='text-white'>

                    Notifications</Nav.Link>
                  <NavDropdown className='text-white' title="Dropdown" id="basic-nav-dropdown" title='Me'>
                    <NavDropdown.Item href="#action/3.1">My</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" title='Work'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='text-white' href="#link">
                    <FaVideo />
                    Learning</Nav.Link>
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