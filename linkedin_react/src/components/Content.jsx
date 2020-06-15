import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import "./MainCss.css"

class Content extends Component {
    render() {
        return (
            <Container className="content">
                <Jumbotron profileInfo={this.props.profileInfo} />
            </Container>
        );
    }
}

export default Content;