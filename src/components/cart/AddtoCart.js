import React, { useState } from 'react'
import './addtocart.css'
import pic1 from '../../Assets/images/mango.jpg'
import pic2 from '../../Assets/images/cm9.jpg'
import pic3 from '../../Assets/images/pomog.jpg'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BiSolidTrash } from "react-icons/bi";


const AddtoCart = () => {
    const [counter, setCounter] = useState(1); // Initialize counter to 1
    const [total, setTotal] = useState(36.00); // Initialize total to the price of one item

    const Decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setTotal(total - 36.00);
        }
    }

    const Increment = () => {
        setCounter(counter + 1);
        setTotal(total + 36.00);
    }

    return (
        <>
            <div className="addCart">
                <div className="container">
                    <h3>Delivery Information</h3>

                    <div className="row">
                        <div className="col-lg-8">
                            <h4>Item 1 of 3:</h4>
                            <div className="detail mb-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={pic1} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <span>Mangos</span>
                                        <h3>Minneola Tangelos</h3>
                                        <span>11 Lbs / Pack</span>
                                        <h2>$36.00</h2>
                                    </div>
                                    <div className="col-lg-3">
                                        <table className="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <td className='btns' onClick={Decrement}><TiMinus className='qicon' /></td>
                                                    <td>{counter}</td>
                                                    <td className='btns' onClick={Increment}><FaPlus className='qicon' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div> <h4 className='mt-3'>Total: ${total.toFixed(2)}</h4> </div>
                                        <button className='btn'><BiSolidTrash className='mb-1 me-1' />Delete</button>
                                    </div>
                                    <div className='mt-4'>
                                        <h4>Shipping and Handling Service</h4>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>USPS Priority Mail - Large Flat Rate Box - $19.90</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h4>Item 2 of 3:</h4>
                            <div className="detail mb-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={pic2} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <span>Dates</span>
                                        <h3>Yellow Barhi</h3>
                                        <span>11 Lbs / Pack</span>
                                        <h2>$110.00</h2>
                                    </div>
                                    <div className="col-lg-3">
                                        <table className="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <td className='btns' onClick={Decrement}><TiMinus className='qicon' /></td>
                                                    <td>{counter}</td>
                                                    <td className='btns' onClick={Increment}><FaPlus className='qicon' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div> <h4 className='mt-3'>Total: ${total.toFixed(2)}</h4> </div>
                                        <button className='btn'><BiSolidTrash className='mb-1 me-1' />Delete</button>
                                    </div>
                                    <div className='mt-4'>
                                        <h4>Shipping and Handling Service</h4>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>USPS Priority Mail - Large Flat Rate Box - $19.90</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h4>Item 3 of 3:</h4>
                            <div className="detail mb-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={pic3} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <span>Pomegarante</span>
                                        <h3>Eversweet Pomegarante</h3>
                                        <span>11 Lbs / Pack</span>
                                        <h2>$36.00</h2>
                                    </div>
                                    <div className="col-lg-3">
                                        <table className="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <td className='btns' onClick={Decrement}><TiMinus className='qicon' /></td>
                                                    <td>{counter}</td>
                                                    <td className='btns' onClick={Increment}><FaPlus className='qicon' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div> <h4 className='mt-3'>Total: ${total.toFixed(2)}</h4> </div>
                                        <button className='btn'><BiSolidTrash className='mb-1 me-1' />Delete</button>
                                    </div>
                                    <div className='mt-4'>
                                        <h4>Shipping and Handling Service</h4>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>USPS Priority Mail - Large Flat Rate Box - $19.90</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="shipping">
                                <h3>Shipping Address</h3>
                                <p>No saved addresses</p>
                                <button className='btn'>Add Address</button>
                            </div>
                            <div className="summary mt-4">
                                <h3>Cart Summary</h3>
                                <div className="row">
                                    <div className="col-8">Number of Items</div>
                                    <div className="col-4 right">{counter}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8">Sub Total</div>
                                    <div className="col-4 right">${total.toFixed(2)}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8">Shipping & handling fee</div>
                                    <div className="col-4 right">$19.90</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-8">Total Payable</div>
                                    <div className="col-4 right">${(total + 19.90).toFixed(2)}</div>
                                </div>
                            </div>
                            <button className='btn' style={{ width: '100%' }}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddtoCart;
