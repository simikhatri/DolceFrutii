import React from 'react'
import category1 from '../../Assets/images/category1.jpg'
import { FaStar } from "react-icons/fa";

const Dates = () => {
    return (
        <>
            <div>
                <h1 className='CatHeading'>Dates</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Yellow Barhi</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Barhi</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={category1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span>In Stock</span>
                                <h5 className="card-title">Medjool</h5>
                                <div className='mt-2'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <span className='review'>45 Reviews</span>
                                </div>
                                <p className="card-text">$96</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12"></div>
                </div>
            </div>
        </>
    )
}

export default Dates
