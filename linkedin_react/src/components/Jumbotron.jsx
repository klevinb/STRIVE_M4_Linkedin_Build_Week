import React, { Component } from 'react';
import { Button, Col, Image, Row, } from 'react-bootstrap'
import { RiPencilLine } from 'react-icons/ri'
import { FaRegBuilding, FaUniversity } from 'react-icons/fa'
import { TiCameraOutline } from 'react-icons/ti'
import { GiCancel } from 'react-icons/gi'
import { MdAddAPhoto } from 'react-icons/md'

class JumBotron extends Component {

    state = {
        profile: null
    }
    handleUpload = async () => {
        const photo = new FormData()
        photo.append("profile", this.state.profile)

        let resp = await fetch("https://striveschool.herokuapp.com/api/profile/user16/picture", {
            method: "POST",
            body: photo,
            headers: new Headers({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
            }),
        })
        console.log(resp)

    }

    handleChange = (e) => {
        const profile = e.target.files[0]

        this.setState({
            profile
        });
        setTimeout(() => this.handleUpload(), 1000)
    }

    render() {
        return (
            <div id="jumbotronMain" className="contentCol box-shadow " >
                <div id='cameraIcon'>
                    {this.props.profileInfo.username === "user16" &&
                        <TiCameraOutline />
                    }
                </div>
                <div id="jumbotron">
                    <Image fluid className="w-100" src="/assets/jumbotronCover.jpeg" />
                </div>
                <div id="profilePhoto">
                    {this.props.profileInfo.username === "user16" &&
                        <label htmlFor="upload" id="editPhoto"><MdAddAPhoto /></label>
                    }
                    {this.props.profileInfo.image
                        ?
                        this.props.profileInfo.username === "user16" ?
                            <Image src={this.props.profileInfo.image} />
                            :
                            <Image src={this.props.profileInfo.image} />

                        : <Image src='https://img.icons8.com/officel/2x/user.png' />
                    }
                </div>
                <div>
                    <Row className="d-flex justify-content-between">
                        <Col md={6} className="pl-5" id="firstCol">
                            <h4>{this.props.profileInfo.name} {this.props.profileInfo.surname}</h4>
                            <h5>{this.props.profileInfo.bio.length > 29 ? this.props.profileInfo.bio.slice(0, 29) + "..." : this.props.profileInfo.bio}</h5>
                            <div className="d-flex">
                                <h6 className="mr-4">{this.props.profileInfo.area}</h6>
                                <h6 className="mr-4"><p> 97 connections </p></h6>
                                <h6 className="mr-4"><p>Contact info</p></h6>
                            </div>
                        </Col>
                        <Col md={6} className="mt-4 d-flex flex-column">
                            <div className="align-self-end mr-4">
                                {this.props.profileInfo.username === "user16" ?
                                    <>
                                        <Button>Add profile section</Button>
                                        <Button id="secondButton">More ...</Button>
                                        <RiPencilLine />
                                        <input style={{ display: "none" }} type="file" id="upload" profile="file" onChange={(e) => this.handleChange(e)} accept="image/*" />
                                    </>
                                    :
                                    <>
                                        <Button>Message</Button>
                                        <Button id="secondButton">More ...</Button>
                                    </>
                                }
                            </div>
                            <div id="status" >
                                <div className="d-flex mt-4">
                                    <FaRegBuilding /><p>{this.props.profileInfo.title}</p>
                                </div>
                                <div className="d-flex">
                                    <FaUniversity /><p>--School--</p>
                                </div>
                            </div>
                        </Col>

                        <div id="moreInfo" className="ml-5 mr-5 mb-3">
                            <div id="xbutton">
                                {this.props.profileInfo.username === "user16" &&
                                    <GiCancel />
                                }
                            </div>
                            <p>
                                <span>Show recruiters you’re open</span> to job opportunities—you control who sees this.
                                    <br></br>
                                    Get started
                                </p>
                        </div>
                    </Row>
                </div>
            </div>

        );
    }
}

export default JumBotron;