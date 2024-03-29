import React from 'react';
import { Link } from 'react-router-dom';
import './css/Shop.css'
import dates from '../../Assets/images/Date.png'
import citrus from '../../Assets/images/Citrus.jpg'
import mango from '../../Assets/images/pic2.jpg'
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
                                            <p>Taste the Golden Harvest: Unveiling the Best Organic Barhi Dates California</p>
                                            <Link to="/productDesciption" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={citrus} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Citrus</h4>
                                            <p>Bursting jewels, a taste explosion of sweet and tart perfection.</p>
                                            <Link to="/productDesciption" className="shop">View
                                                <MdNavigateNext /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="slide">
                                    <div className="card" >
                                        <img src={mango} className="card-img-top" alt="..." />
                                        <div className="card-body text-start">
                                            <h4 className="card-title">Mangos</h4>
                                            <p> Nature's candy, a sweet and chewy delight for a wholesome treat.</p>
                                            <Link to="/productDesciption" className="shop">View
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
                </div>
            </div >
        </>
    )
}

export default HomeBlog;
