import React from 'react'
import date from '../../Assets/images/Date.jpeg'
import './_.css'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <>
            <div className="ProductDetail">
                <div className="container">
                    <img src={date} alt="Dates" className='productImg' />
                    <div className="Detail">
                        <dov className="row">
                            <div className="col-lg-6">
                                <h3>Blog Category</h3>
                                <p>january 31,2023</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <Link>Next</Link>|<Link>Previuos</Link>
                            </div>
                        </dov>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
