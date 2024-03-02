import React from 'react'
import category1 from '../../Assets/images/category1.jpg'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SelectOptionButton from "./SelectBtn"


const Figs = () => {
    return (
        <div className='mt-4 categoryItems'>
            <h1 className='CatHeading'>Figs</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <Link to='/description' className='desclink'>
                            <img src={category1} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <Link to='/description' className='desclink'>
                                <h5 className="card-title my-1 mt-1">Violette de Bordeaux</h5>
                            </Link>
                            <p className="card-text">From $96</p>
                            <SelectOptionButton options={['Option A', 'Option B', 'Option C']} />
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

export default Figs
