import React, { Component } from 'react'
import "./footerstyle.css"
import {Container, Row, Col, Form} from "react-bootstrap"

export class Footer extends Component {
  render() {
    return (
      <Container className="containers">
        <img src="assets/linkedin-logo.png" className="mt-4"/>
        <Row className="mt-4 flex-column">
          
            <div className="d-flex">
              <Col xs={2}>
                <div className="d-flex flex-column">
                  <a href="#">About</a>
                  <a href="#">Community Guidelines</a>
                  <a href="#">
                    
                    <select id="privacy">
                      <option>
                        Privacy and Terms
                      </option>
                    </select>
                  </a>
                  <a href="#">Sales Solutions</a>
                  <a>Safety Center</a>
                </div>
              </Col>

              <Col xs={2}>
                <div className="d-flex flex-column">
                  <a href="#">Accessibility</a>
                  <a href="#">Careers</a>
                  <a href="#">Ad Choices</a>
                  <a href="#">Mobile</a>
                </div>  
              </Col>

              <Col xs={2}>
                <div className="d-flex flex-column">
                  <a href="#">Talent Solutions</a>
                  <a href="#">Marketing Solutions</a>
                  <a href="#">Advertising</a>
                  <a href="#">Small Business</a>
                </div>
              </Col>

              <Col xs={3}>
                <div className="d-flex flex-column">
                  <a href="#">
                    Questions?
                    <p href="#">Visit our Help Center.</p>
                  </a>
                  <a href="#">
                    Manage your account and privacy
                    <p href="#">Go to your Settings.</p>
                  </a>
                  
                </div>
              </Col>

              <Col xs={3}>
                <div className="d-flex flex-column">
                  
                  <label>Select Language</label>
                  <select>
                    <option>
                      English (english)
                    </option>
                  </select>
                </div>
              </Col>
            </div>

            
              <p className="ml-2">LinkedIn Corporation © 2020</p>
            
          
        </Row>
       
        
      </Container>
    )
  }
}

export default Footer
