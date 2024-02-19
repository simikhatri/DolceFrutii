import React from 'react'
import ruby from '../../Assets/images/Desert Ruby.jpeg'
import './item.css'
import Itemslider from './Itemslider'

const Item = () => {
    return (
        <>
            <div className="description">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="leftSection">
                                {/* <img src={ruby} alt="" /> */}
                                <Itemslider />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rightSection">
                                <h1>Minneola Tangelos</h1>
                                <span>Ships in 3 days</span>
                                <h2>$36.00</h2>
                                <div className='quantity'>Unit Quantity: 10 Lbs</div>
                                <div className="poundbtn">
                                    <button className='btn me-2'>5 Lbs</button>
                                    <button className='btn me-2'>10 Lbs</button>
                                    <button className='btn'>15 Lbs</button>
                                </div>
                                <div className="cartbtn">
                                    <button className='btn me-3'>Add to Cart</button>
                                    <button className='btn'>Save for Later</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className='moreContent'>
                                <h4>Contents</h4>
                                <div className='mb-4'>Contains 30Lbs of Minneola Tangelos</div>
                                <h4>More About the Product</h4>
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas doloremque incidunt delectus veniam esse dolores temporibus, repellendus aliquid expedita ipsa saepe facere voluptates corrupti aperiam!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
