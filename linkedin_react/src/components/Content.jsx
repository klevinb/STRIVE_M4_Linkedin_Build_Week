import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import SideContent from './SideContent'
import "./MainCss.css"

class Content extends Component {
    render() {
        return (
            <Container className="content">
                <Row md={2}>
                    <Jumbotron profileInfo={this.props.profileInfo} />
                    <SideContent />
                </Row>
            </Container>
        );
    }
}

export default Content;