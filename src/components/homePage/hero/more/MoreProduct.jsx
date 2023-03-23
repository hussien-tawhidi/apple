import React from "react";
import { Link } from "react-router-dom";

export default function MoreProduct() {
  return (
    <div className='more-product'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className='single-more'>
            <img src='/assets/homeImages/poster1.jpg' alt='' />

            <Link to='/airpods' className='title one'>
              let's join from listening musixcs
              <div className='more'>
                see more{" "}
                <span>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className='col-lg-6 col-md-12'>
          <div className='tow-more'>
            <div className='single-more'>
              <img src='/assets/homeImages/poster2.jpg' alt='' />
              <Link to='/iphone' className='title tow'>
                most sell and most wanted phones
                <div className='more'>
                  see more{" "}
                  <span>
                    <i className='fa-solid fa-angle-right'></i>
                  </span>
                </div>
              </Link>
            </div>

            <div className='single-more'>
              <img src='/assets/homeImages/poster3.jpg' alt='' />
              <Link to='/watch' className='title three'>
                everywhere in any time just with you
                <div className='more'>
                  see more{" "}
                  <span>
                    <i className='fa-solid fa-angle-right'></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-12'>
          <div className='tow-more'>
            <div className='single-more'>
              <img src='/assets/homeImages/poster4.jpg' alt='' />
              <Link to='/mac' className='title tow'>
                most sell and most wanted macbook
                <div className='more'>
                  see more{" "}
                  <span>
                    <i className='fa-solid fa-angle-right'></i>
                  </span>
                </div>
              </Link>
            </div>

            <div className='single-more'>
              <img src='/assets/homeImages/poster6.jpg' alt='' />
              <Link to='/accessories' className='title three'>
                see the most effecient accessories
                <div className='more'>
                  see more{" "}
                  <span>
                    <i className='fa-solid fa-angle-right'></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-12'>
          <div className='single-more'>
            <img src='/assets/homeImages/poster5.jpg' alt='' />

            <Link to='/microsoft' className='title one'>
              see all of the best microsoft products
              <div className='more'>
                see more{" "}
                <span>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
