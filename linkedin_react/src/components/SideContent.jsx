import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import './MainCss.css'

class SideContent extends React.Component {

    state = {
        users: []
    }

    componentDidMount = () => {
        const url = "https://striveschool.herokuapp.com/api/profile/";

        const username = 'user24';
        const password = '48D4vaVh6Ra3DD8w';

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((users) => {
                this.setState({ users })
            })
    }

    render() {
        return (
            <Col md={3} className="sideContent pl-4 pt-4">
                <Row className="pb-5 d-flex flex-column ">
                    <Col className="col pt-3 border-bottom">
                        <div className="d-flex justify-content-between">
                            <p>Edit public profile and URL</p>
                            <AiOutlineQuestionCircle />
                        </div>
                    </Col>
                    <Col className="col pt-3 border-bottom">
                        <div className="d-flex justify-content-between">
                            <p>Add profile in another language</p>
                            <AiOutlineQuestionCircle />
                        </div>
                    </Col>
                </Row>
                <p>People also viewed</p>
                {this.state.users.slice(4, 7).map((user, i) => {
                    return (
                        <Row className="pb-3" key={i}>
                            <Col md={4}>
                                {user.image === undefined || user.image === ''
                                    ? <Image
                                        src='https://img.icons8.com/officel/2x/user.png'
                                        style={{ height: "4rem", width: "4rem", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />
                                    : <Image
                                        src={user.image}
                                        style={{ height: "4rem", width: "4rem", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />

                                }
                            </Col>
                            <Col className="col col-8 d-flex justify-content-between pt-3 border-bottom">
                                <div className="d-flex flex-column ">
                                    <strong>{user.name} {user.surname}</strong>
                                    <span>{user.title}</span>
                                </div>
                                <div>
                                    <span><i className="fa fa-user-plus"></i></span>
                                </div>
                            </Col>
                        </Row>
                    )
                })}
            </Col>
        )
    }

}

export default SideContent
