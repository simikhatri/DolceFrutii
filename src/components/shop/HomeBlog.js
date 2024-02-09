import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import './css/Shop.css'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import dates from '../../images/cm9.jpg'
import pome from '../../images/pomog.jpg'
import fig from '../../images/fig.jpg'
import { MdNavigateNext } from "react-icons/md";


const HomeBlog = () => {
    return (
        <>
            <div className="blogSwiper text-center">
                <h1 className='swiperHead'>Blogs</h1>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={dates} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Dates</h4>
                                            <p>Nature's sweet gems, a delightful blend of chewy and rich goodness.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={pome} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Pomegranates</h4>
                                            <p>Bursting jewels, a taste explosion of sweet and tart perfection.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={fig} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Figs</h4>
                                            <p> Nature's candy, a sweet and chewy delight for a wholesome treat.</p>
                                            <Link to="/blog" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MoreBlogBtn">
                            <Link to="/blog" className='btn'>More Blogs</Link>
                        </div>
                    </div>
                    {/* <Swiper className='Swiper'
                        slidesPerView={3}
                        breakpoints={{
                            900: { slidesPerView: 3 },
                            600: { slidesPerView: 2 },
                            450: { slidesPerView: 1 },
                            270: { slidesPerView: 1 },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={1}>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="card" >
                                    <img src={dates} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body text-start">
                                        <h5 className="card-title">Dates</h5>
                                        <p>Nature's sweet gems, a delightful blend of chewy and rich goodness.</p>
                                        <Link to="/blog" className="shop">Shop Now
                                            <MdNavigateNext /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="card" >
                                    <img src={pome} className="card-img-top" alt="..." />
                                    <div className="card-body text-start">
                                        <h5 className="card-title">Pomegranates</h5>
                                        <p>Bursting jewels, a taste explosion of sweet and tart perfection.</p>
                                        <Link to="/blog" className="shop">Shop Now
                                            <MdNavigateNext /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="card" >
                                    <img src={fig} className="card-img-top" alt="..." />
                                    <div className="card-body text-start">
                                        <h5 className="card-title">Figs</h5>
                                        <p> Nature's candy, a sweet and chewy delight for a wholesome treat.</p>
                                        <Link to="/blog" className="shop">Shop Now
                                            <MdNavigateNext /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="card" >
                                    <img src={orange} className="card-img-top" alt="..." />
                                    <div className="card-body text-start">
                                        <h5 className="card-title">Citrus</h5>
                                        <p> Tangy joy, a burst of freshness in every zesty citrus moment.</p>
                                        <Link to="/blog" className="shop">Shop Now
                                            <MdNavigateNext /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="card" >
                                    <img src={mango} className="card-img-top" alt="..." />
                                    <div className="card-body text-start">
                                        <h5 className="card-title">Mangos</h5>
                                        <p>
                                            Tropical bliss, a juicy symphony of sweetness in every bite.
                                        </p>
                                        <Link to="/blog" className="shop">Shop Now
                                            <MdNavigateNext /></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper> */}
                </div>
            </div >
        </>
    )
}

export default HomeBlog;
