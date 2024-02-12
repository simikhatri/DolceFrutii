import React from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic1 from "../../images/pic1.jpg"
import pic2 from "../../images/pic2.jpg"
import pic3 from "../../images/pic3.jpg"
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
            {/* <div className="img1 img"></div> */}
            <img src={pic1} alt="" className="img" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic2} alt="" className="img" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={pic3} alt="" className="img" />
          </div>
        </div>
        <div className="carousel-caption">
          <h1 className="mb-2">Fresh, Healthy & Organic</h1>
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
