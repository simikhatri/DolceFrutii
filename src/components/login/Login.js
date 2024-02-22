import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="innercontent">
            <h3>Phone</h3>
            <div className="row">
              <div className="col-lg-9">
                <div className="mb-3">
                  <input type="tel" className="form-control phinput" placeholder='(xxx).xxx.xxxx' />
                </div>
              </div>
              <div className="col-lg-3">
                <button className='btn'>Get OTP</button>
              </div>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder='Enter OTP' />
            </div>
            <div className='orText'>OR</div>
            <div>
              <h3>Email</h3>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder='John@gmail.com' />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder='Password' />
              </div>
              <div className='text-center'>
                <Link to="/" className='pforgot mt-1'>Forgot User ID/Password</Link>
                <button className='Signbtn'>Sign In</button>
                <h5>New Customer: <Link to='/signup' className='SignUp'>Sign Up</Link></h5>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
