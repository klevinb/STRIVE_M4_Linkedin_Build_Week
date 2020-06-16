import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import SideContent from './SideContent'
import UserContent from './UserContent'
import Experiences from './Experiences'
import { Spinner } from 'react-bootstrap'
import "./MainCss.css"

class Content extends Component {

    state = {
        userInfo: undefined,
        userId: this.props.match.params.userID,
        loading: true
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
                userInfo: respObj,
                loading: false
            }, () => this.props.getUserImg(this.state.userInfo.image)))

    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.userId !== this.props.match.params.userID) {
            this.setState({
                userId: this.props.match.params.userID
            }, () => {
                this.fetchFunction()
                this.props.getUserImg(this.state.userInfo.image)
            });
            // doing the fetch again
            // save userInfo in the state
        }
    }

    componentDidMount = () => {
        this.fetchFunction()
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
                    {this.state.userInfo &&

                        <>
                            <Jumbotron profileInfo={this.state.userInfo} />
                            <SideContent />
                            <UserContent profileInfo={this.state.userInfo} />
                            <Experiences userID={this.state.userInfo.username} />
                        </>
                    }
                </Row>

            </Container >
        );
    }
}
export default Content;