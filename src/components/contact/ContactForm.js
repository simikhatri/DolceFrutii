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
                        <Col xs={12} md={12} lg={4}>
                            <div className="contactInfo">
                                <div className="heading">
                                    <h5>Address</h5>
                                    <p>72-811, Hwy 111, Ste 1052 Palm Desert, CA, 92260</p>
                                </div>
                                <div className="heading">
                                    <h5>Billing Inquiries</h5>
                                    <p>760.786.7786</p>
                                </div>
                                <div className="heading">
                                    <h5>Information & Sales</h5>
                                    <p>info@dolcefrutti.com</p>
                                </div>
                                <div className="heading">
                                    <h5>Support </h5>
                                    <p>support@dolcefrutti.com</p>
                                </div>
                                <div className="heading">
                                    <h5>Shop</h5>
                                    <p>shop@dolcefrutti.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={8}>
                            <Row>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>First Name</Form.Label>
                                        <Form.Control className='input-field' type="text" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Last Name</Form.Label>
                                        <Form.Control className='input-field' type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Email <span>*</span></Form.Label>
                                        <Form.Control className='input-field' type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Street Address</Form.Label>
                                        <Form.Control className='input-field' type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Apartment No.</Form.Label>
                                        <Form.Control className='input-field' type="text" />
                                    </Form.Group>
                                    <Row>
                                        <Col xs={12} md={4} lg={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='label'>City</Form.Label>
                                                <Form.Control className='input-field' type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} md={4} lg={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='label'>State</Form.Label>
                                                <Form.Control className='input-field' type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} md={4} lg={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='label'>Zip</Form.Label>
                                                <Form.Control className='input-field' type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Phone</Form.Label>
                                        <Form.Control className='input-field' type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>How did you find us</Form.Label>
                                        <Form.Select className='input-field' aria-label="Default select example">
                                            <option></option>
                                            <option value="1">Instagram</option>
                                            <option value="2">Tiktok</option>
                                            <option value="3">Website</option>
                                            <option value="4">Facebook</option>
                                            <option value="5">Friend</option>
                                            <option value="6">Google Search</option>
                                            <option value="7">Any other</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='label'>Comments</Form.Label>
                                        <Form.Control className='input-comment' as="textarea" rows={4} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='d-flex mt-3'>
                                <Form.Check aria-label="option 1" className='checkbox' />
                                I'd like to subscribe to Newsletter <br />
                                I understand and agree to the privacy policy
                            </div>
                            <div className='text-center mt-4'>
                                <button className="btn">Submit</button>
                            </div>
                            {/* <div className="formleft">
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
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ContactForm
