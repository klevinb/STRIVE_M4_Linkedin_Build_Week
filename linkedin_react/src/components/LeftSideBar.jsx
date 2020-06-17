import React, { Component } from 'react'
import {Container, Row, Col, Jumbotron} from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class SideBar extends Component {
  render() {
    return (
      <Router>
        <div>
        <Container>
          <Row>
            <Col className="d-flex flex-column">
            <div style={{backgroundColor: "#f5f5f5", border: "1px solid lightgrey", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} className="mb-4">
              <div>
              <Jumbotron fluid style={{backgroundColor: "#f5f5f5"}}>
                  <Container>
                   
                    
                    
                  </Container>
                  <h5 className="text-center">Welcome, Shiji</h5>

                  <div className="text-center">
                   <Link>Update your profile</Link>
                  </div>

                  
              </Jumbotron>
              <hr/>
              <Link>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Connections <br/> Grow your network </p>
                  </div>

                  <div>
                    <p>80</p>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Who viewed your profile</p>
                  </div>

                  <div>
                    <p>22</p>
                  </div>
                </div>
              </Link>

              <hr/>

              <Link>
                <p>See all Premium features</p>
              </Link>


              <hr/>

              <Link>
                <p>Saved items</p>
              </Link>





              </div>

            </div>


            <Col style={{backgroundColor: "#f5f5f5", border: "1px solid lightgrey", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              <div>
              <h4 className="mt-3">Recent</h4>
              <Link>
                  <div>
                    <h6>HTML & CSS learning group</h6>
                  </div>  
              </Link>

              <h4 className="mt-3">Recent</h4>
              <Link>
                  <div>
                    <h6>HTML & CSS learning group</h6>
                    <p>See all</p>
                  </div>  
              </Link>


              

              <div className="d-flex justify-content-between">
                  <div>
                    <p>Event</p>
                  </div>

                  <div>
                    <p>+</p>
                  </div>
                </div>

                <hr/>

              <Link>
                <p>Discover More</p>
              </Link>

              </div>

            </Col>



            </Col>

          </Row>
        </Container>
      </div>
      </Router>
    )
  }
}

export default SideBar
