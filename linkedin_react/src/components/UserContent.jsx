import React from 'react';
import { Col } from 'react-bootstrap'
import { RiPencilLine } from 'react-icons/ri'


function UserContent(props) {
    return (
        <>
            <div className="contentCol p-4 mt-5 mb-4">
                <div className="d-flex justify-content-between">
                    <h4>About</h4>
                    <div>
                        <RiPencilLine />
                    </div>
                </div>
                <p>
                    I am learning React.js and I am creating projects using this framework and every day I am getting better and better on it.
                </p>
            </div>
        </>
    );
}

export default UserContent;