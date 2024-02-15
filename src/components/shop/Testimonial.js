import React from 'react'
import './css/testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import { Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";


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
                                    <h5 className="card-title">Paras K.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>2/3/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">Amazing and delicious!</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">abdul K.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/30/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">Fantastic citrus delivery—pure delight</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5828qNy6cbG9k_6Uod7Bfy_Qe7XGC-C7pVeuZjVXQvA&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Neetu A.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/31/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">absolutely nice! Delighted with the quality and taste.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZL6JNeX8Y-HNvNHodxpX2f2xBHvz0Y3AL2O9YKI6xuA&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Lily P.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/28/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">Good Product and Nice Experience.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CWlooH-A5n2sDoRz5qklkpv5z_Z8NG5_vKF6oeul-w&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Hanif.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>12/29/2023</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">truly nice! Exceptional quality and flavor, exceeded expectations.</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFHTXYKxp5MgCIEu9xsEgA0oTZz6QQkk8Xp7KEEAcAQ&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Arun M.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/22/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">Exceptional quality, and the flavor is simply outstanding</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVZYYuMCf3QrLBfPZjb8CtNu6bUWJf6i-W7f9IJTIpA&s" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ayesha k.<RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>1/31/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">absolutely nice.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialItem">
                            <div className="card" >
                                <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">John Deo <RiVerifiedBadgeFill className='ms-2 mb-1' /></h5>
                                    <p className='date'>2/1/2024</p>
                                    <p className='review'><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="card-text">pleasant surprise! Sweet and succulent, a delightful experience.</p>
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
