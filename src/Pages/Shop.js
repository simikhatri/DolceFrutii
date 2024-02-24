import React from 'react'
// import Slider from '../components/shop/Slider'
import '../components/shop/css/Shop.css'
import Landing from '../components/shop/Landing'
import HomeBlog from '../components/shop/HomeBlog'
import Testimonial from '../components/shop/Testimonial'
import WhatWeDo from '../components/shop/WhatWeDo'
import ContactForm from '../components/contact/ContactForm'
import HeroSection from '../components/heroSection'

const Shop = () => {
    return (
        <div>
            <HeroSection/>
            {/* <Slider /> */}
            <WhatWeDo />
             <Landing />
            <HomeBlog />
            <Testimonial />
            <h1 className='shopcontact'>Contact us</h1>
            <ContactForm />

        </div>

    )
}

export default Shop
