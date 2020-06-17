import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import { FaShare } from 'react-icons/fa'

class FeedPosts extends Component {

    state = {
        clicked: false
    }

    render() {
        return (
            <div className="postContent box-shadow  mb-2">
                <div className='d-flex align-items-center p-3'>
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
                        <BsThreeDots />
                    </div>
                </div>
                <div className="p-3">
                    {this.props.info.text}
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
            </div>

        );
    }
}

export default FeedPosts;