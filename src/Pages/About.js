import React from 'react'
import FootContact from '../components/footer/FootContact'
import '../components/about/about.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../Assets/images/Desert Ruby.jpeg'
import pic2 from '../Assets/images/valencia pride.jpg'
import pic3 from '../Assets/images/keitt.jpeg'

const About = () => {
    return (
        <>
            <div className='about'>
                <Carousel>
                    <div>
                        <img src={pic1} alt='image' />
                    </div>
                    <div>
                        <img src={pic2} alt='image' />
                    </div>
                    <div>
                        <img src={pic3} alt='image' />
                    </div>
                </Carousel>

            </div>
            <FootContact />
        </>
    )
}

export default About
