import React, { Component } from 'react';
import { Image, Button, DropdownButton, Dropdown, Modal, Form, Row, Col } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import { FaShare } from 'react-icons/fa'

class FeedPosts extends Component {

    state = {
        clicked: false,
        showDropdown: false,
        showModal: false,
        editNewsFeed: false,
        editPostId: this.props.info._id,
        newsFeed: this.props.info.text,
        image: ''
    }

    deletePost = (id) => {
        console.log(id)
        this.setState({
            showDropdown: false
        });
    }

    
    handleChange = (event) => {
        this.setState({
            newsFeed: event.currentTarget.value
        });

    }

    
    saveImg = (event) => {
        let photo = new FormData()
        photo.append('post', event.target.files[0])
        this.setState({
            image: photo
        });
    }


    
    editPost = (e) => {
        e.preventDefault()
        const url = 'https://striveschool.herokuapp.com/api/posts/'+this.state.editPostId
        Promise.all(
            [
                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(this.state.newsFeed),
                    headers: new Headers({
                        'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                        "Content-Type": "application/json",
                    })
                }),

                fetch(url, {
                    method: "POST",
                    body: this.state.image,
                    headers: new Headers({
                        'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                    })
                })
            ]
        ).then(this.setState({
            showModal: false,
            editNewsFeed: false,
        }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <div className="postContent box-shadow  mb-2">
                <div className='postHeader d-flex align-items-center p-3'>
                    <div id="postImage" className='mr-3'>
                        {this.props.info.user.image ?
                            <Link to={"/profiles/" + this.props.info.user.username}>
                                <Image fluid src={this.props.info.user.image} />
                            </Link>
                            :
                            <Link to={"/profiles/" + this.props.info.user.username}>
                                <Image fluid src='https://img.icons8.com/officel/2x/user.png' />
                            </Link>
                        }
                    </div>
                    <div className="d-flex flex-column">
                        <h6 className="m-0">
                            <Link to={"/profiles/" + this.props.info.user.username}>
                                {this.props.info.user.name + " " + this.props.info.user.surname}
                            </Link>
                        </h6>
                        <label className="m-0">{this.props.info.user.title.slice(0, 50)}</label>
                        <label className="m-0">Time</label>
                    </div>
                    <div className="postOptions">

                        <div onClick={() => this.setState({ showDropdown: !this.state.showDropdown })}>
                            <BsThreeDots />
                        </div>

                    </div>
                    <div id="dropDownMenu">
                        <Dropdown.Menu show={this.state.showDropdown}>
                            <Dropdown.Item onSelect={() => this.setState({ showModal: true, editNewsFeed: true }) }>Edit</Dropdown.Item>
                            <Dropdown.Item onSelect={() => this.deletePost(this.props.info._id)}>Delete</Dropdown.Item>
                            <Dropdown.Item onSelect={() => console.log("Something else")}>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                </div>
                <div className="postImage p-3">
                    {this.props.info.text}
                    {this.props.info.image &&
                        <Image src={this.props.info.image} />
                    }
                </div>
                <div className="p-3">
                    <hr></hr>
                    <div className="commentIcons d-flex">
                        {this.state.clicked ?
                            <div onClick={() => this.setState({ clicked: !this.state.clicked })}>
                                <AiFillLike /> Liked
                            </div>

                            :
                            <div onClick={() => this.setState({ clicked: !this.state.clicked })}>
                                <AiOutlineLike /> Like
                            </div>
                        }
                        <div onClick={() => console.log("Add a comment")}>
                            <GoComment /> Comment
                        </div>
                        <FaShare /> Share
                    </div>
                </div>
            </div >

            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false, editNewsFeed: false })}>
            
            {this.state.editNewsFeed &&
                <>
                    <Modal.Header >
                        <Modal.Title>Edit this Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="d-flex flex-column" onSubmit={this.editPost}>
                            <Form.Group controlId="feed">
                                <Form.Label>Your Post Here</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={this.state.newsFeed}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                            <label>Image</label>
                            <input type="file" id="image" profile="file" onChange={this.saveImg} accept="image/*" />
                            <br></br>
                            <div className="d-flex justify-content-center">
                                <Button className="align-self-center mr-4" variant="warning" type="submit" onClick={() => console.log(this.props.info._id)}>
                                    Edit
                            </Button>
                                <Button className="align-self-center" variant="danger" onClick={() => this.deletePost(this.state.editPostId)}>
                                    Delete
                            </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </>
            }
            </Modal>
            </>

        );
    }
}

export default FeedPosts;