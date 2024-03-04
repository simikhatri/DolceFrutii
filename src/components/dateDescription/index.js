import React from 'react'
import date from '../../Assets/images/Date.png'
import './_.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import dates from "../../Assets/images/cm9.jpg"

const index = () => {
    return (
        <>
            <div className="ProductDetail">
                <Container>
                    <Image src={date} alt="Dates" className='productImg' />
                    <div className="Detail">
                        <Row>
                            <Col lg={6}>
                                <h3>Blog Category</h3>
                                <h5>january 31,2023</h5>
                            </Col>
                            <Col lg={6} className="text-end">
                                <Link className='pagelink'>Next</Link>|<Link className='pagelink'>Previuos</Link>
                            </Col>
                        </Row>
                        <div className='productContent'>
                            <h1>Organic Barhi Dates California</h1>
                            <p>Organic Barhi Dates California are increasingly capturing the attention of
                                health-conscious consumers and gourmet anthusiasts alike. Situated at the heart of
                                this movement is the rise of organic farming practices, particularly in the fertile lands
                                of Coachella Valley, known for its ideal growing conditions for these succulent fruits.
                            </p>
                        </div>
                        <div className="relatedPost">
                            <h1 className='mb-4 pb-2'>Related Blog Posts</h1>
                            <Row>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Img variant="top" src={dates} />
                                        <Card.Body>
                                            <Card.Title>best harvest time of barhi</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Img variant="top" src={dates} />
                                        <Card.Body>
                                            <Card.Title>best harvest time of barhi</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Img variant="top" src={dates} />
                                        <Card.Body>
                                            <Card.Title>best harvest time of barhi</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default index
