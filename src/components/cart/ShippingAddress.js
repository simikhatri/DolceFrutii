import React, { useState } from 'react';
import './shippingaddress.css'
import { Link } from 'react-router-dom'

const ShippingAddress = () => {
    const [useAsBilling, setUseAsBilling] = useState(false);
    const [showInput, setShowInput] = useState(false);


    const handleCheckboxChange = () => {
        setUseAsBilling(!useAsBilling);
    };
    const handlePaymentOptionClick = () => {
        setShowInput(true);
    };
    return (
        <>
            <div className="col-lg-4 p-0">
                <div className="shipping">
                    <Link to='/' className='float-end'>Change</Link>
                    <h4>Shipping Address</h4>
                    <div className='mt-3'>Abdullah Ikrama</div>
                    <div>Phone: 872 302 9012</div>
                    <div>1171 S School St</div>
                    <div>Lombard, IL</div>
                    <div>60148</div>
                    <div className="form-check mt-3">
                        <input className="form-check-input" type="checkbox"
                            value={useAsBilling}
                            onChange={handleCheckboxChange}
                            defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Use shipping address as billing address
                        </label>
                    </div>
                    {!useAsBilling && (
                        <div className='mt-4'>
                            <Link to='/' className='float-end'>Change</Link>
                            <h4>Billing Address</h4>
                            <div className='mt-3'>Abdullah Ikrama</div>
                            <div>Phone: 872 302 9012</div>
                            <div>1171 S School St</div>
                            <div>Lombard, IL</div>
                            <div>60148</div>
                        </div>
                    )}
                </div>
                <div className="summary mt-4">
                    <h4>Cart Summary</h4>
                    <div className="row">
                        <div className="col-8">Merchandise:</div>
                        <div className="col-4 right">$500.00</div>
                    </div>
                    <div className="row">
                        <div className="col-8">Shipping & handling fee:</div>
                        <div className="col-4 right">$99</div>
                    </div>
                    <div className="row">
                        <div className="col-8">Total before tax:</div>
                        <div className="col-4 right">$599.00</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-8">taxes:</div>
                        <div className="col-4 right">$35.00</div>
                    </div>
                    <div className="row">
                        <div className="col-8">Order Total:</div>
                        <div className="col-4 right">$634.00</div>
                    </div>

                    <div className="payment mt-4">
                        <h5>Select a Payment Option</h5>
                        <div className='d-flex justify-content-evenly'>
                            <button className='btns'
                                onClick={handlePaymentOptionClick}
                                style={{ backgroundColor: '#004AAD' }}>Credit/Dedit Card</button>
                            <button className='btns'
                                style={{ backgroundColor: '#8C52FF' }}>PayPal</button>
                        </div>
                        {showInput && (
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder='Enter Email ID' />
                            </div>
                        )}
                    </div>
                    <button className='btn' style={{ width: '100%', backgroundColor: '#00BF63' }}>Checkout</button>
                </div>

            </div>
        </>
    )
}

export default ShippingAddress
