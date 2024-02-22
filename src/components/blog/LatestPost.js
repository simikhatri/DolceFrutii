import React from 'react'
import "./latestpost.css"
import pic1 from '../../Assets/images/Desert Ruby.jpeg'
import pic2 from '../../Assets/images/valencia pride.jpg'
import pic3 from '../../Assets/images/Golden Lady.jpeg'

const LatestPost = () => {
    return (
        <>
            <div className="latestPost">
                <h1>Recent Post</h1>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={pic1} className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={pic2} className="d-block img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={pic3} className="d-block img-fluid" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LatestPost
