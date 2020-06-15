import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const SideContent = () => {
    return (
        <Container>
            <Row >
                <Col md={4} className="offset-md-8 pt-5">
                    <p>People also viewed</p>
                    <Row className="pb-3">
                        <Col md={4}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy8CLoH417aCkx0K-EMLskwy4FoapOexfHoPyB-mg3ERMSkFXH&usqp=CAU'
                                style={{height:"5rem", width: "5rem"}}
                                className="card-img img-fluid"
                                alt="image"
                            />
                            
                        </Col>
                        <Col className="col col-8 d-flex flex-column pt-3 border-bottom">
                            <strong>Full Name Of User</strong>
                            <p>Title Of User</p>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col md={4}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy8CLoH417aCkx0K-EMLskwy4FoapOexfHoPyB-mg3ERMSkFXH&usqp=CAU'
                                style={{height:"5rem", width: "5rem"}}
                                className="card-img img-fluid"
                                alt="image"
                            />
                            
                        </Col>
                        <Col className="col col-8 d-flex flex-column pt-3 border-bottom">
                            <strong>Full Name Of User</strong>
                            <p>Title Of User</p>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col md={4}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy8CLoH417aCkx0K-EMLskwy4FoapOexfHoPyB-mg3ERMSkFXH&usqp=CAU'
                                style={{height:"5rem", width: "5rem"}}
                                className="card-img img-fluid"
                                alt="image"
                            />
                            
                        </Col>
                        <Col className="col col-8 d-flex flex-column pt-3 border-bottom">
                            <strong>Full Name Of User</strong>
                            <p>Title Of User</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SideContent
