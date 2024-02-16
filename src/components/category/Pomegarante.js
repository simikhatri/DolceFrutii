import React from 'react'
import category1 from '../../Assets/images/category1.jpg'
import { FaStar } from "react-icons/fa";

const Pomegarante = () => {
    return (
        <div className='mt-4'>
            <h1 className='CatHeading'>Pomegarantes</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <img src={category1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span>In Stock</span>
                            <h5 className="card-title">Eversweet Pomegarante</h5>
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
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                </div>
            </div>
        </div>
    )
}

export default Pomegarante
