import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import '../components/CSS/contact.css'

const Contact = () => {

    return (
        <>
            <div className="contact animated fadeInLeft">
                <Container>
                    <div className="text-center contItem">
                        <h1 className='conthead'>Hello!</h1>
                        <div className="contactContent">
                            Our group enjoys coming up with answers and solutions.<br /> Please get in touch with us; we would be delighted to hear from you.
                            <div className='officehour'>Office hours</div>
                            <div className='timing'> are 7:00 am to 1:00 pm, Monday through Thursday.</div>
                        </div>
                    </div>
                </Container>
            </div >
            <ContactForm />
        </>
    )
}

export default Contact
