import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from 'react-router-dom'
import '../CSS/contact.css'


const ContactForm = () => {
    return (
        <>
            <div className="contactForm">
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div className="Form">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='label'>Email <span>*</span></Form.Label>
                                        <Form.Control className='input-field' type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='label'>Message <span>*</span></Form.Label>
                                        <Form.Control className='input-field' as="textarea" rows={4} />
                                    </Form.Group>
                                </Form>
                                <Button className='btn'>Submit</Button>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="formleft">
                                <h1>Make Contact</h1>
                                <div className="socialMedia">
                                    We would love to hear from you, <br /> so please contact us or follow us <br /> on social media!
                                </div>
                                <div className="socialIcons mt-3">
                                    <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                        <MdEmail className='mx-2' style={{ cursor: 'pointer' }} />
                                    </Link>
                                    <Link to="https://www.facebook.com/dolcefruttiUSA" className="iconss">
                                        <FaFacebookF className='mx-2' style={{ cursor: 'pointer' }} />
                                    </Link>
                                    <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                        <AiFillInstagram className='mx-2' style={{ cursor: 'pointer' }} />
                                    </Link>
                                    <Link to="https://www.youtube.com/channel/UCTEsan1pgEHkCacYRwm7NQw" className="iconss">
                                        <FaYoutube className='mx-2' style={{ cursor: 'pointer' }} />
                                    </Link>
                                    <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                        <IoLogoTiktok className='mx-2' style={{ cursor: 'pointer' }} />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ContactForm
