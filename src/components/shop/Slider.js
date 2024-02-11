import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/slider.css";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="img1 img"></div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="img2 img"></div>
            {/* <div className="carousel-caption">
                            <h2 className='mb-2 carouselhead'>7+ varieties of Organic Dates</h2>
                            <button>BUY SOME</button>
                        </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="img3 img"></div>
            {/* <div className="carousel-caption thirdSlide">
                            <h2 className='mb-2'>Grow in the USA, the Organic way</h2>
                            <button>Learn More</button>
                        </div> */}
          </div>
        </div>
        <div className="carousel-caption">
          <h1 className="mb-2">Fresh, Healthy & Organic</h1>
          <h4 className="mb-3">100% organic Fruits</h4>
          <h4 className="mb-3">100% organic Fruits</h4>
          <h4 className="mb-3">100% organic Fruits</h4>
          <div className="btn-shop">
            <button>Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
