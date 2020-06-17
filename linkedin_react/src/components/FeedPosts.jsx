import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'

class FeedPosts extends Component {

    render() {
        return (
            <div className="postContent mb-2">
                <div className='d-flex align-items-center p-2'>
                    <div id="postImage" className='pr-3'>
                        <Image fluid src='https://img.icons8.com/officel/2x/user.png' />
                    </div>
                    <div className="d-flex flex-column">
                        <h6 className="m-0">User</h6>
                        <label className="m-0">Title</label>
                        <label className="m-0">Time</label>
                    </div>
                    <div className="postOptions">
                        <BsThreeDots />
                    </div>
                </div>
                <div className="p-3">
                    {this.props.info.text}
                </div>
            </div>

        );
    }
}

export default FeedPosts;