import React from 'react'
import {Col, Card, Button, Image} from 'react-bootstrap'

function RightSideFeed() {
    return (
        <Col md={3}>
            <Card className="text-center" style={{ width: '100%', height: '25rem' }}>
                <Card.Header className="d-flex justify-content-end">Ad...</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>Get the latest jobs and industry news!</Card.Title>
                    <Card.Img src="https://strive.school/hosted/images/4d/0e6c0c1c644c73a888e789e1be5c6e/flag.png"  style={{ width: '12rem', height: '12rem' }}></Card.Img>
                    <Card.Text>
                        Explore relevant opportunities with StriveSchool!
                    </Card.Text>
                    <Button variant="outline-primary">Follow</Button>
                </Card.Body>
            </Card>
            <hr/>
            <div>
                <div className="d-flex justify-content-around">
                    <p>About</p>
                    <p>Accessibility</p>
                    <p>Help Center</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p>Privacy & Terms</p>
                    <p>Ad Choices</p>
                    <p>Advertising</p>
                </div>
                <div className="d-flex justify-content-around">
                    <p>Business Services</p>
                    <p>Get the LinkedIn app</p>
                </div>
                <div className="d-flex justify-content-center">
                    <p>More</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Image src="/assets/linkedin-logo.png" style={{ width: '5rem', height: '1.5rem' }} />
                    <span>LinkedIn Corporation &#169;2020</span>
                </div>
            </div>
        </Col>
    )
}

export default RightSideFeed
