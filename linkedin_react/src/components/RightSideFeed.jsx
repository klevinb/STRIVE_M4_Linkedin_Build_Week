import React from 'react'
import {Col, Card, Button} from 'react-bootstrap'

function RightSideFeed() {
    return (
        <Col md={3}>
            <Card className="text-center" style={{ width: '30rem', height: '30rem' }}>
                <Card.Header className="d-flex justify-content-end">Ad...</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>Get the latest jobs and industry news!</Card.Title>
                    <Card.Text>
                        Explore relevant opportunities with StriveSchool!
                    </Card.Text>
                    <Button variant="outline-primary">Follow</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Col>
    )
}

export default RightSideFeed
