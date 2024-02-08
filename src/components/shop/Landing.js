import React from 'react'
import './css/Shop.css'
import { Link } from 'react-router-dom'
import dates from '../../images/cm9.jpg'
import pome from '../../images/pomog.jpg'
import mango from '../../images/mango.jpg'
import fig from '../../images/fig.jpg'
import orange from '../../images/orange.jpg'

const Landing = () => {
  return (
    <>
      <div className="landing text-center">
        <div className="container">
          <div className="landItem">
            <h1 className='catHeading'>Shop</h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={dates} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Dates</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={pome} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Pomegranates</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={fig} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Figs</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 p-0" ></div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={orange} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Citrus</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0" >
                <div className="landContent text-center">
                  <div className="card">
                    <div className="cat-image">
                      <Link to="/" className="link-category_product">
                        <img src={mango} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="cat-title">
                      <Link to="/" className='link'>Mangos</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 p-0" ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
