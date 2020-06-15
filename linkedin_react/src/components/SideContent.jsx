import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

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
                console.log(users)
            })
    }

    render() {
        return (
            <Col md={3} className=" pl-4 pt-4">
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
                {this.state.users.slice(0, 4).map((user, i) => {
                    return (
                        <Row className="pb-3" key={i}>
                            <Col md={4}>
                                <img
                                    src='https://img.icons8.com/officel/2x/user.png'
                                    style={{ height: "5rem", width: "5rem" }}
                                    className="card-img img-fluid"
                                    alt="image"
                                />

                            </Col>
                            <Col className="col col-8 d-flex pt-3 border-bottom">
                                <Row>
                                    <Col sm={10} className="d-flex flex-column w-75">
                                        <strong>{user.name} {user.surname}</strong>
                                        <span>{user.title}</span>
                                    </Col>
                                    <Col sm={2}>
                                        <span><i className="fa fa-user-plus"></i></span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                })}
            </Col>
        )
    }

}

export default SideContent
