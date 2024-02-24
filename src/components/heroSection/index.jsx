import { useEffect } from 'react'
import { Carousel } from 'bootstrap';
import { Link } from 'react-router-dom';

import pic1 from "../../Assets/images/pic1.jpg"
import pic2 from "../../Assets/images/pic2.jpg"

import pic3 from "../../Assets/images/pic3.jpg"
import './style.css'
const HeroSection = () => {
    useEffect(() => {
        const carousel = new Carousel(document.getElementById('mainCarousel'), {
            interval: 5000,
            //   pause: 'hover'
        });
    }, []);
    return (
        <div>
            <div id="mainCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h1 className="mb-4">dates, fruits and desserts</h1>
                            <h2 className="mb-2">100% organic</h2>
                            <h2 className="mb-2">No pesticides, fertilizers or herbicides used</h2>
                            <h2 className="mb-2">Ripened on trees and Hand-picked</h2>
                            <div className="btn-shop">
                                <Link to='/categories' className="button">Shop</Link>

                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="mb-2">Savor the symphony with our sun-kissed citrus,</h2>
                            <h2 className="mb-2">luscious mangoes, and ruby-red pomegranates</h2>
                            <h2 className="mb-2">nature's finest at your fingertips</h2>
                            <div className="btn-shop">
                                <Link to='/categories' className="button">Shop</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2 className="mb-2">embrace nature's wisdom with our permaculture</h2>
                            <h2 className="mb-2">farming practices for healthier, sustainable living.</h2>
                            <div className="btn-shop">
                                <Link to='/categories' className="button">Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeroSection
