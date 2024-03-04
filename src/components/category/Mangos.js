import React from 'react'
import pride from '../../Assets/images/valencia pride.jpg'
import desert from '../../Assets/images/Desert Ruby.jpeg'
import goldenlady from '../../Assets/images/Golden Lady.jpeg'
import keitt from '../../Assets/images/keitt.jpeg'
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const Mangos = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-4 categoryItems'>
            <h1 className='CatHeading'>Mangos</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={goldenlady} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <Link to='/description' className='desclink'>
                                <h5 className="card-title my-1 mt-1">Golden Lady</h5>
                            </Link>
                            <p className="card-text">From $96</p>
                            <button className='SelectBtn'
                                onClick={() => navigate("/description")}>Select Option</button>
                            <div className='mt-2'>
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <span className='review'>45 Reviews</span>
                            </div>
                            <span className='stock'>In Stock</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={pride} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <Link to='/description' className='desclink'>
                                <h5 className="card-title my-1 mt-1">Valencia Pride</h5>
                            </Link>
                            <p className="card-text">From $96</p>
                            <button className='SelectBtn'
                                onClick={() => navigate("/description")}>Select Option</button>
                            <div className='mt-2'>
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <span className='review'>45 Reviews</span>
                            </div>
                            <span className='stock'>In Stock</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={desert} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <Link to='/description' className='desclink'>
                                <h5 className="card-title my-1 mt-1">Desert Ruby</h5>
                            </Link>
                            <p className="card-text">From $96</p>
                            <button className='SelectBtn'
                                onClick={() => navigate("/description")}>Select Option</button>
                            <div className='mt-2'>
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <span className='review'>45 Reviews</span>
                            </div>
                            <span className='stock'>In Stock</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={keitt} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <Link to='/description' className='desclink'>
                                <h5 className="card-title my-1 mt-1">Keitt</h5>
                            </Link>
                            <p className="card-text">From $96</p>
                            <button className='SelectBtn'
                                onClick={() => navigate("/description")}>Select Option</button>
                            <div className='mt-2'>
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <FaStar className='icon' />
                                <span className='review'>45 Reviews</span>
                            </div>
                            <span className='stock'>In Stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mangos
