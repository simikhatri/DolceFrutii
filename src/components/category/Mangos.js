import React from 'react'
import pride from '../../Assets/images/valencia pride.jpg'
import desert from '../../Assets/images/Desert Ruby.jpeg'
import goldenlady from '../../Assets/images/Golden Lady.jpeg'
import keitt from '../../Assets/images/keitt.jpeg'
import { FaStar } from "react-icons/fa";

const Mangos = () => {
    return (
        <div className='mt-4'>
            <h1 className='CatHeading'>Mangos</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <img src={goldenlady} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span>In Stock</span>
                            <h5 className="card-title">Golden Lady</h5>
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
                        <img src={pride} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span>In Stock</span>
                            <h5 className="card-title">Valencia Pride</h5>
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
                        <img src={desert} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span>In Stock</span>
                            <h5 className="card-title">Desert Ruby</h5>
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
                        <img src={keitt} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span>In Stock</span>
                            <h5 className="card-title">Keitt</h5>
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
            </div>
        </div>
    )
}

export default Mangos
