import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap'
import { FaRegBuilding } from 'react-icons/fa'
import { RiPencilLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import "./MainCss.css"



class Experiences extends Component {

    state = {
        userData: '',
        userID: props.userID
    }

    componentDidMount = async () => {
        await fetch("https://striveschool.herokuapp.com/api/profile/" + props.userID + "/experiences", {
            headers: new Headers({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                "Content-Type": "application/json",
            }),
        })
            .then(resp => resp.json())
            .then(respObj => this.setState({
                userData: respObj
            }))
    }

    componentDidUpdate = async () => {
        if (this.state.userID !== props.userID) {
            console.log('EXPERIENCES from new user')
            this.setState({ userID: props.userID }, async () => {
                await fetch("https://striveschool.herokuapp.com/api/profile/" + props.userID + "/experiences", {
                    headers: new Headers({
                        'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                        "Content-Type": "application/json",
                    }),
                })
                    .then(resp => resp.json())
                    .then(respObj => this.setState({
                        userData: respObj
                    }))
            })
        }
    }


    render() {
        return (
            <>
                {this.state.userData && this.state.userData.map(user =>
                    <>
                        <Col md={9} className="contentCol p-4 mb-3">
                            {console.log(this.state.userData)}
                            <div className="d-flex justify-content-between">
                                <h4>Experiences</h4>
                                <div>
                                    <AiOutlinePlus />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div id="experienceContent" className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center ">
                                        <div id="iconDiv">
                                            <FaRegBuilding />
                                        </div>
                                        <div className="ml-4">
                                            <h5>{user.role}</h5>
                                            <p>{user.company}</p>
                                            <p>{user.description}</p>
                                            <p>{user.startDate.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <RiPencilLine />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                        </Col>
                    </>
                )}

            </>
        );
    }
}

export default Experiences;