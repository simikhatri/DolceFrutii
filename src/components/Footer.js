import React from 'react'
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoLeafSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                {/* Section: Social media */}
                <div className="social" style={{ backgroundColor: '#A06701' }}>
                    <div className="container">
                        <div className="row p-4 text-white justify-content-center" >
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoSearchSharp className='mb-1' /> 7+ varieties
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoLeafSharp className='mb-1' /> 100% Organic
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 SLinks">
                                <Link to='/' className="Reviews">
                                    <IoIosHeart className='mb-1' /> Heart Healthy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className=" text-md-start footercont">
                        <div className="container">
                            <div className="row justify-content-evenly alllinks">
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <div className="footRight">
                                        <img className='dateImg' src={logo} alt="" />
                                        <div>
                                            <div className="socialIcons">
                                                <Link to="https://www.facebook.com/dolcefruttiUSA" className="iconss">
                                                    <FaFacebookF className='item' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <MdEmail className='item mx-1' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <AiFillInstagram className='item mx-1' />
                                                </Link>
                                                <Link to="https://www.youtube.com/channel/UCTEsan1pgEHkCacYRwm7NQw" className="iconss">
                                                    <FaYoutube className='item mx-1' />
                                                </Link>
                                                <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                                                    <IoLogoTiktok className='item mx-1' />
                                                </Link>
                                            </div>
                                        </div>
                                        {/* <div className="footcard">
                                            <h3>California Grown Organic Exotic Dates</h3>
                                            <button className='btn'>SHOP NOW</button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <h6 className="fw-bold foothead">Products</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#F15922', height: 3, color: '#F15922' }} />
                                    <p>
                                        <Link to='/' className="link">Dates</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Pomegranates</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Citrus</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Figs</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Mangos</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <h6 className="fw-bold foothead">Useful links</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#F15922', height: 3, color: '#F15922' }} />
                                    <p>
                                        <Link to='/' className="link">Home</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">How it works</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Offerings</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Contact Us</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Sign In</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <h6 className="fw-bold foothead">Contact</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#F15922', height: 3, color: '#F15922' }} />
                                    <p className="link"> <MdOutlineEmail /> support@dolcefrutti.com</p>
                                    <p className="link"> <MdOutlineEmail /> info@dolcefrutti.com</p>
                                    <p className="link"><MdOutlineEmail /> shop@dolcefrutti.com</p>
                                    <p className="link"><MdOutlinePhoneInTalk /> 760.786.7786</p>
                                    <p className="link"><LiaFaxSolid /> 760.786.8786</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3" style={{ backgroundColor: '#A06701', color: "#ffffff", fontSize: '20px' }}>
                    2024 All CopyRights reserved |
                    <Link to='https://www.dolcefrutti.com/' style={{ textDecoration: 'none', color: "#e69300" }}> Dolce Frutti LLC</Link>
                </div>
            </footer >


        </>
    )
}

export default Footer
