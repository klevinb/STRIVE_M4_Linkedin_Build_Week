import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import SideContent from './SideContent'
import UserContent from './UserContent'
import Experiences from './Experiences'
import "./MainCss.css"

class Content extends Component {

    state = {
        userInfo: null,
        userId: this.props.match.params.userID
    }

    fetchFunction = async () => {
        await fetch("https://striveschool.herokuapp.com/api/profile/" + this.state.userId, {
            headers: new Headers({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                "Content-Type": "application/json",
            }),
        })
            .then(response => response.json())
            .then(respObj => this.setState({
                userInfo: respObj
            }))



    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.userId !== this.props.match.params.userID) {
            this.setState({
                userId: this.props.match.params.userID
            });
            this.props.getUserImg(this.state.userInfo.image)
            // doing the fetch again
            // save userInfo in the state
            this.fetchFunction()
        }
    }

    componentDidMount = () => {
        this.fetchFunction()
    }

    render() {
        return (
            <Container className="content mt-4 mb-4">
                {() => this.props.getUserImg(this.state.userInfo.image)}
                <Row>
                    {this.state.userInfo &&
                        <>
                            <Jumbotron getUserImg={this.props.getUserImg} profileInfo={this.state.userInfo} />
                            <SideContent />
                            <UserContent profileInfo={this.state.userInfo} />
                            <Experiences userID={this.props.match.params.userID} />
                        </>
                    }
                </Row>

            </Container>
        );
    }
}
export default Content;