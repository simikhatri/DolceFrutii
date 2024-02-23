import React from 'react'
import './css/whatwedo.css'
import { LiaSeedlingSolid } from "react-icons/lia";
import { SiOverleaf } from "react-icons/si";
import { FiTruck } from "react-icons/fi";
import { TfiPackage } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <>
            <div className='wedo'>
                <div className="container text-center">
                    <h1>About Us</h1>
                    <div className="row">
                        <div className="col-lg-3 p-0">
                            <div className="working ">
                                <LiaSeedlingSolid className='icon' />
                                <div className="content text-start">
                                    <h4>Organic Farming</h4>
                                    <p>The most sustainable form of agriculture that prioritizes the use of natural processes is organic
                                        farming. Central to our organic farming principles is our emphasis on soil... <Link to="/about" className='readLink'>Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <SiOverleaf className='icon' />
                                <div className="content text-start">
                                    <h4>Quality Harvesting</h4>
                                    <p>The meticulous process of harvesting fruit while still ensuring the preservation of flavor,
                                        texture, and quality of the fruit requires that you time the harvest appropriately...<Link to="/about" className='readLink'>Read More</Link> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <TfiPackage className='icon' />
                                <div className="content text-start">
                                    <h4>Fresh Packing</h4>
                                    <p>Packing fruit for shipping is not like shipping clothes off Amazon. It requires delicate
                                        cushioning to prevent damage that can occur. We typically use cardboard boxes as...
                                        <Link to="/about" className='readLink'>Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0">
                            <div className="working">
                                <FiTruck className='icon' />
                                <div className="content text-start">
                                    <h4>Shipping & Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus at magni eligendi, quia ut eum doloremque eius debitis iure, nemo suscipit!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo
