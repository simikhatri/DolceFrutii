import React from 'react'
import FootContact from '../components/footer/FootContact'
import '../components/about/about.css'

const About = () => {
    return (
        <>
            <div className='about'>
                <div className="container">
                    <h1>About Us</h1>
                    <div className="aboutText">
                        As we have grown as a company, it has become imperative for our customers to understand how
                        we as a company work. Noticing how difficult it is for customers to buy high-quality fruits at
                        their local grocery stores, we decided to follow the growing demand for these kinds of products
                        mailed straight to your door. We found the unique beauty and versatility of growing in the
                        Coachella Valley of Southern California as the perfect place to set up shop. Seeing the growing
                        market for all kinds of fruits and our signature sweetest Barhi dates, from Americans who want
                        to just eat or gift delicious fruit, and immigrant communities who are fond of the fruits they ate
                        in the countries they grew up in, or those concerned with being as healthy as possible, we
                        decided to start this venture to make sure they can find exactly what they need. As a family-
                        owned business, we are obsessed with making sure you get the best quality produce.
                    </div>
                    <div className="whatdo">
                        <h1>What We Do</h1>
                        <div className="Section">
                            <h3>Organic Farming</h3>
                            <div>The most sustainable form of agriculture that prioritizes the use of natural processes is organic
                                farming. Central to our organic farming principles is our emphasis on soil health, employing practices like
                                not using pesticides or herbicides, and using composting to enhance soil fertility and structure. We
                                encourage plant diversity in our farming ecosystem to promote a more resilient ecosystem and reduce
                                vulnerability to pests. Through our organic principles, we aim to create a resilient and regenerative
                                agricultural system that nurtures the soil, supports biodiversity, and produces wholesome fruits.</div>
                        </div>
                        <div className="Section">
                            <h3>Quality Harvesting</h3>
                            <div>The meticulous process of harvesting fruit while still ensuring the preservation of flavor,
                                texture, and quality of the fruit requires that you time the harvest appropriately so you get fruit
                                that can be brought to market at the ideal ripeness. Careful handling to prevent damage while the
                                fruit is sorted keeps the quality of our fruit at a premium. Before packaging, we store all fruit in a
                                cool dry place or refrigerated in cold storage if need be.</div>
                        </div>
                        <div className="Section">
                            <h3>Fresh Packing</h3>
                            <div>Packing fruit for shipping is not like shipping clothes off Amazon. It requires delicate
                                cushioning to prevent damage that can occur. We typically use cardboard boxes as they are the
                                easiest to use for shipping. After packages are sealed we refrigerate the packages to maintain
                                freshness until they are ready to be sent out.</div>
                        </div>
                        <div className="Section">
                            <h3>Shipping & Delivery</h3>
                            <div>Packing fruit for shipping is not like shipping clothes off Amazon. It requires delicate
                                cushioning to prevent damage that can occur. We typically use cardboard boxes as they are the
                                easiest to use for shipping. After packages are sealed we refrigerate the packages to maintain
                                freshness until they are ready to be sent out.</div>
                        </div>
                    </div>
                </div>
            </div>
            <FootContact />
        </>
    )
}

export default About
