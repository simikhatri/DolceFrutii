import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="Signup">
                <div className="container">
                    <div className="innercontent">
                        <h2 className='text-center'>Welcome to <strong>Dolce Frutti</strong></h2>
                        <p className='text-center'>We are happy to have you here!</p>
                        <div className='mt-4'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name <span>*</span></label>
                                    <input type="text" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name(Optional)</label>
                                    <input type="text" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address <span>*</span></label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3 position-relative">
                                    <label htmlFor="password" className="form-label">Password <span>*</span></label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="password"
                                    />
                                    <div className='eyeicon px-3' onClick={togglePasswordVisibility}>
                                        {
                                            showPassword ? <FaEye className='icon' /> : <FaEyeSlash className='icon' />
                                        }
                                    </div>
                                </div>
                                <button type="submit" className="btn signbtn">Sign Up</button>
                                <div className='text-center'>
                                    <Link to='/Login'>Already have an account? Login here</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp