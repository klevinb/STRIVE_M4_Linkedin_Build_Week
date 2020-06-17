import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import FeedContent from './FeedContent'

class Feed extends Component {

    state = {
        feeds: ''
    }

    fetchPosts = async () => {
        await fetch("https://striveschool.herokuapp.com/api/posts/", {
            headers: new Headers({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                "Content-Type": "application/json",
            }),
        })
            .then(resp => resp.json())
            .then(respObj => this.setState({
                feeds: respObj
            }))
    }

    componentDidMount() {
        this.fetchPosts()
    }


    render() {
        return (
            <Container className="content mt-4 mb-4">
                {this.state.loading &&
                    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: "100vh" }}>
                        <Spinner style={{ fontSize: "200px" }} animation="grow" variant="secondary" />
                    </div>
                }
                <Row>
                    {this.state.feeds &&
                        <>
                            <Col md={3} className="d-flex flex-column mb-3" >
                                <div>
                                    Sidebar
                                </div>
                            </Col>
                            <Col md={6} className="d-flex flex-column mb-3 " >
                                <FeedContent />
                            </Col>
                            <Col md={3} className="sideContent pl-4 pt-4">
                                <div>
                                    Sidebar
                                </div>
                            </Col>

                        </>
                    }
                </Row>

            </Container >
        );
    }
}

export default Feed;