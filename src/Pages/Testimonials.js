import React from 'react'
import '../components/testimonials/testimonials.css'
import { FaStar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import audio from '../Assets/audio/Audio.ogg'
import FootContact from '../components/footer/FootContact'

const Testimonials = () => {
    return (
        <>
            <div className="Testimonial text-center">
                <div className="container">
                    <h1>Testimonials</h1>
                    <div className='Testitem'>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>RM</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Rizwana Mazhar<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>9/16/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"Received the parcel of dates n mangoes. Dates are v sweet,
                                        didn't taste mangoes yet. Thanks for sharing"</p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>SG</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Sabiha Ghani<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/30/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"MashaAllah so sweet dates. May AllahTaala Bless your orchard withh all
                                        the khair and you and your progeny get benefits throughout your lives. Ameen"</p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>SJ</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Shaikh Jamal <RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>10/11/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">
                                        <audio controls className='audio'>
                                            <source src={audio} type="audio/ogg" />
                                        </audio>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>SS</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Sadath Sayeed<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>10/29/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"The Medjhool dates were awesome."</p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>JV</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Javier Vivanco<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>10/3/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"Thank you for the dates and mango. The dates are so sweet the one are mature.
                                        We didn't try yet the mango but seems to be in a good mature moment to eat. Thank you again"</p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>FN</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Fahmi Nogura<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>9/26/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"Received.. great taste jazakallah khair."</p>
                                </div>


                            </div>

                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>SA</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Shaima Alrayes<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>0/27/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"Thank you so much for the delicious dates i received from you. Jazak Allah Khairan"</p>
                                </div>

                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="card" >
                                {/* <div className='box'>JH</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">Jawad Hamdan <RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>9/28/2028</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">"Thank you so much for the sweet gift, we did receive the package but it was mashed up.
                                        the dates taste good and sweet as it should be. Thank you again for your kindness"</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FootContact />
        </>
    )
}

export default Testimonials
