import React from 'react'
import './css/testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import audio from '../../Assets/audio/Audio.ogg'


const Testimonial = () => {
    return (
        <>
            <div className="testimonials text-center">
                <h1 className='testHead'>Testimonials</h1>
                <Swiper className='Swiper'
                    slidesPerView={3}
                    breakpoints={{
                        900: { slidesPerView: 3 },
                        600: { slidesPerView: 2 },
                        450: { slidesPerView: 1 },
                        270: { slidesPerView: 1 },
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    spaceBetween={1}>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj-pRmqYH-8ONKwUmsgfljQaM9ArDp4FL0IoBFa-Fyg&s" className="card-img-top" alt="..." />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Sabiha Ghani<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/30/2024</p>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj-pRmqYH-8ONKwUmsgfljQaM9ArDp4FL0IoBFa-Fyg&s" className="card-img-top" alt="..." />
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
                                        <audio controls>
                                            <source src={audio} type="audio/ogg" />
                                        </audio>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj-pRmqYH-8ONKwUmsgfljQaM9ArDp4FL0IoBFa-Fyg&s" className="card-img-top" alt="..." />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CWlooH-A5n2sDoRz5qklkpv5z_Z8NG5_vKF6oeul-w&s" className="card-img-top" alt="..." />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFHTXYKxp5MgCIEu9xsEgA0oTZz6QQkk8Xp7KEEAcAQ&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">fahmi Nogura<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVZYYuMCf3QrLBfPZjb8CtNu6bUWJf6i-W7f9IJTIpA&s" className="card-img-top" alt="..." />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial
