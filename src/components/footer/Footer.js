import React from 'react'
import logo from '../../Assets/images/logo3.png';
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import insta from '../../Assets/images/instagram.png'
import fb from '../../Assets/images/facebook.png'
import youtube from '../../Assets/images/youtube.png'
import tiktok from '../../Assets/images/tik-tok.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <section>
                    <div className=" text-md-start footercont">
                        <div className="container">
                            <div className="row justify-content-evenly alllinks">
                                <div className="col-lg-3 col-md-3 mb-3">
                                    <div className="footRight">
                                        <img className='footerlogo' src={logo} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Products</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/categories' className="link">Dates</Link>
                                    </p>
                                    <p>
                                        <Link to='/categories' className="link">Citrus</Link>
                                    </p>
                                    <p>
                                        <Link to='/categories' className="link">Mangos</Link>
                                    </p>
                                    <p>
                                        <Link to='/categories' className="link">Figs</Link>
                                    </p>
                                    <p>
                                        <Link to='/categories' className="link">Pomegranates</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Useful links</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/about' className="link">About Us</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link">Shop</Link>
                                    </p>
                                    <p>
                                        <Link to='/blog' className="link">Blogs</Link>
                                    </p>
                                    <p>
                                        <Link to='/testimonials' className="link">Testimonials</Link>
                                    </p>
                                    <p>
                                        <Link to='/contact' className="link">Contact Us</Link>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 my-3">
                                    <h6 className="fw-bold foothead">Contact</h6>
                                    <hr className="mb-1 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#E1C343', height: 3, color: '#E1C343' }} />
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> support@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> info@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlineEmail /> shop@dolcefrutti.com</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><MdOutlinePhoneInTalk /> 760.786.7786</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><FaWhatsapp /> 760.600.6401</Link>
                                    </p>
                                    <p>
                                        <Link to='/' className="link"><LiaFaxSolid /> 760.786.8786</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center py-4">
                    <div className="left-line"><hr /></div>
                    <div className="right-line"><hr /></div>
                    <div className="socialIcons">
                        <Link to="https://www.facebook.com/dolcefruttiUSA" className="iconss">
                            <img src={fb} alt="facebook" className='item' />
                        </Link>
                        <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                            <img src={insta} alt="instagram" className='item' />
                        </Link>
                        <Link to="https://www.youtube.com/channel/UCTEsan1pgEHkCacYRwm7NQw" className="iconss">
                            <img src={youtube} alt="youtube" className='item' />
                        </Link>
                        <Link to="https://www.instagram.com/dolcefruttiusa/" className="iconss">
                            <img src={tiktok} alt="tiktok" className='item' />
                        </Link>
                    </div>
                </div>
                <div className="btmFooter py-2">
                    <Link to='/PrivacyPolicy' className='btmlink px-2'>Return & Refund Policy</Link> |
                    <Link to='/PrivacyPolicy' className='btmlink px-2'>Privacy Policy</Link> |
                    &nbsp; All &copy; 2024
                    <Link to='https://www.dolcefrutti.com/' className='weblink px-2'> Dolce Frutti LLC</Link>
                </div>
            </footer >
        </>
    )
}

export default Footer
