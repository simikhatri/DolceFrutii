import React from 'react'
import './addtocart.css'
import pic from '../../Assets/images/mango.jpg'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BiSolidTrash } from "react-icons/bi";


const AddtoCart = () => {
    return (
        <>
            <div className="addCart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>There are 1 items in your cart</h3>
                            <div className="detail">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={pic} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h3>Minneola Tangelos</h3>
                                        <span>Ships in 3 days</span>
                                        <h2>$36.00</h2>
                                        <div className='quantity'>Mangoes . Order Qty: 10 Lbs</div>
                                    </div>
                                    <div className="col-lg-3">
                                        <table class="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <td className='btns'><TiMinus className='qicon' /></td>
                                                    <td>0</td>
                                                    <td className='btns'><FaPlus className='qicon' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div> <h4 className='mt-2'>Total: $36.00</h4> </div>
                                        <button className='btn'><BiSolidTrash className='mb-1 me-1' />Delete</button>
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
                            <div className="shipping mt-4">
                                <h3>Cart Summary</h3>
                                <div className="row">
                                    <div className="col-6">Number of Items</div>
                                    <div className="col-6">1</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Sub Total</div>
                                    <div className="col-6">$36.00</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Shipping & handling fee</div>
                                    <div className="col-6">$19.90</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-6">Total Payable</div>
                                    <div className="col-6">$54.90</div>
                                </div>
                            </div>
                            <button className='btn'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddtoCart
