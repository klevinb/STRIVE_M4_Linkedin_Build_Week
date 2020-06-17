import React from 'react';
import { Button } from 'react-bootstrap'
import { TiCameraOutline } from 'react-icons/ti'
import { BsCameraVideo, BsPencilSquare } from 'react-icons/bs'
import { FiFileText } from 'react-icons/fi'

function FeedContent(props) {
    return (
        <div className="mb-3">
            <div className="postContainer d-flex">
                <div className="mainPostButton ">
                    <Button>
                        <div className="d-flex">
                            <BsPencilSquare />
                            <p style={{ color: 'rgb(100, 100, 100)', marginLeft: '20px' }}>Start a post</p>
                        </div>
                    </Button>
                </div>
                <div className="feedIcons d-flex">
                    <Button>
                        <TiCameraOutline />
                    </Button>
                    <Button>
                        <BsCameraVideo />
                    </Button>
                    <Button>
                        <FiFileText />
                    </Button>

                </div>

            </div>


            <div className="pt-4">
                <div id="experienceContent" className="d-flex justify-content-between">

                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default FeedContent;