import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import { BsCart4 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";


const Header = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleSearchToggle = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className='logo img-fluid' alt='Dolce frutti' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <RiMenu3Line className='menu-icon' />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item" onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <Link className="nav-link" to="/" >
                                Shop   {isHovered ? <FaChevronUp className='ms-2' /> : <FaChevronDown className='ms-2' />}

                            </Link>
                            <ul className="dropdown" id="submenu">
                                <li>
                                    <Link className="item" to="#action/3.1">All Products</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rewards">
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className='rightContent'>
                        {isSearchVisible && (
                            <div className="nav-item search-field">
                                <input type="text" placeholder="Search" />
                            </div>
                        )}
                        <div className="d-flex mb-3">
                            <div className='text-center px-2'>
                                <Link className="nav-link" to="/">
                                    <IoSearchSharp className='icon' onClick={handleSearchToggle} />
                                </Link>
                            </div>
                            <div className='text-center px-2'>
                                <Link className="nav-link" to="/">
                                    <CgProfile className='icon' />
                                </Link>
                            </div>
                            <div className='text-center px-2'>
                                <Link className="nav-link" to="/">
                                    <BsCart4 className='icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
